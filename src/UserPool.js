import {CognitoUserPool} from "amazon-cognito-identity-js"

const poolData = {
  UserPoolId: "eu-central-1_m0a9iFuiI",
  ClientId: "5eou4s82o1isae8ldn08teponr"
}

const UserPool = new CognitoUserPool(poolData);

export default UserPool;