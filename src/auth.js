import dotenv from 'dotenv';
import AWS from 'aws-sdk';
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';

dotenv.config();

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const poolData = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_APP_CLIENT_ID
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const registerUser = (username, password, email, callback) => {
  const attributeList = [];
  const dataEmail = {
    Name: 'email',
    Value: email
  };
  const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

  attributeList.push(attributeEmail);

  userPool.signUp(username, password, attributeList, null, (err, result) => {
    if (err) {
      return callback(err);
    }
    const cognitoUser = result.user;
    callback(null, cognitoUser);
  });
};

const authenticateUser = (username, password, callback) => {
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: username,
    Password: password,
  });

  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      callback(null, result);
    },
    onFailure: (err) => {
      callback(err);
    },
  });
};

export {
  registerUser,
  authenticateUser
};
