import { ReactComponent as JavaScriptIcon } from "../assets/icons/tecs/javascript.svg";
import { ReactComponent as PythonIcon } from "../assets/icons/tecs/python.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/tecs/reactjs.svg";
import { ReactComponent as AWSIcon } from "../assets/icons/tecs/aws.svg";
import { ReactComponent as ExpressIcon } from "../assets/icons/tecs/expressjs.svg";
import { ReactComponent as MongoDBIcon } from "../assets/icons/tecs/mongodb.svg";
import { ReactComponent as NextJSIcon } from "../assets/icons/tecs/nextjs.svg";
import { ReactComponent as NodeJSIcon } from "../assets/icons/tecs/nodejs.svg";
import { ReactComponent as ReduxIcon } from "../assets/icons/tecs/redux.svg";
import { ReactComponent as XStateIcon } from "../assets/icons/tecs/xstate.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/tecs/github.svg";
import { ReactComponent as AWSDynamoDbIcon } from "../assets/icons/tecs/amazondynamodb.svg";
import { ReactComponent as AWSAPIGatewayIcon } from "../assets/icons/tecs/amazonapigateway.svg";
import { ReactComponent as AWSEC2Icon } from "../assets/icons/tecs/amazonec2.svg";
import { ReactComponent as AWSS3Icon } from "../assets/icons/tecs/amazons3.svg";
import { ReactComponent as AWSLambdaIcon } from "../assets/icons/tecs/awslambda.svg";
import { ReactComponent as AWSCloudfrontIcon } from "../assets/icons/tecs/awscloudfront.svg";
import { ReactComponent as ServerlessIcon } from "../assets/icons/tecs/serverless.svg";

const greyAWSBackground = "rgb(78 78 78)";

export const javascript = {
  name: "JavaScript",
  id: "javascript",
  level: 3.5,
  icon: JavaScriptIcon,
  contStyle: {
    backgroundColor: "black",
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#F7DF1E",
    style: {
      backgroundColor: "black",
    },
  },
  iconCorrection: "2px 0 0",
};

export const python = {
  name: "Python",
  id: "python",
  level: 1.2,
  icon: PythonIcon,
  iconProps: {
    fill: "#3776AB",
  },
  iconCorrection: "2px 0 0",
};

export const react = {
  name: "ReactJS",
  id: "react",
  level: 4,
  icon: ReactIcon,
  iconProps: {
    style: {
      fill: "#415a77",
    },
  },
};

export const nextjs = {
  name: "NextJS",
  id: "nextjs",
  level: 2,
  icon: NextJSIcon,
};

export const aws = {
  name: "Amazon Web Services",
  id: "aws",
  level: 2.5,
  icon: AWSIcon,
  iconCorrection: "2px 1px 0 1px",
};

export const redux = {
  name: "Redux",
  id: "redux",
  level: 4,
  icon: ReduxIcon,
  iconCorrection: "0 0 3px 0",
};

export const mongodb = {
  name: "MongoDB",
  id: "mongodb",
  level: 3,
  icon: MongoDBIcon,
  iconCorrection: "0 0 0 2px",
};

export const nodejs = {
  name: "NodeJS",
  id: "nodejs",
  level: 2.5,
  icon: NodeJSIcon,
  contStyle: { backgroundColor: "#3c3c3c" },
  iconCorrection: "0 1px 0 0",
};

export const expressjs = {
  name: "ExpressJS",
  id: "expressjs",
  level: 2.5,
  icon: ExpressIcon,
};

export const xstate = {
  name: "XState",
  id: "xstate",
  level: 4,
  icon: XStateIcon,
  iconCorrection: "0 0 0 1px",
};

export const github = {
  name: "GitHub",
  id: "github",
  level: 3,
  icon: GitHubIcon,
};

export const awsAPIGateway = {
  name: "AWS API Gateway",
  id: "aws-api-gateway",
  level: 4,
  icon: AWSAPIGatewayIcon,
  contStyle: {
    backgroundColor: greyAWSBackground,
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#FF4F8B",
  },
  iconCorrection: "0 0 0 2px",
};

export const awsEC2 = {
  name: "AWS EC2",
  id: "aws-ec2",
  level: 2.8,
  icon: AWSEC2Icon,
  contStyle: {
    backgroundColor: greyAWSBackground,
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#FF9900",
  },
};

export const awsS3 = {
  name: "AWS S3",
  id: "aws-s3",
  level: 3.8,
  icon: AWSS3Icon,
  contStyle: {
    backgroundColor: greyAWSBackground,
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#569A31",
  },
  iconCorrection: "1px 0 0 2px",
};

export const awsLambda = {
  name: "AWS Lambda",
  id: "aws-lambda",
  level: 3.8,
  icon: AWSLambdaIcon,
  contStyle: {
    backgroundColor: greyAWSBackground,
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#FF9900",
  },
};

export const awsCloudfront = {
  name: "AWS Cloudfront",
  id: "aws-cloudfront",
  level: 3.8,
  icon: AWSCloudfrontIcon,
  contStyle: {
    backgroundColor: greyAWSBackground,
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#FF9900",
  },
};

export const awsDynamoDb = {
  name: "AWS DynamoDb",
  id: "aws-dynamo-db",
  level: 3.8,
  icon: AWSDynamoDbIcon,
  contStyle: {
    backgroundColor: greyAWSBackground,
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#4053D6",
  },
  iconCorrection: "0 0 0 4px",
};

export const serverless = {
  name: "Serverless framework",
  id: "serverless",
  level: 3.5,
  icon: ServerlessIcon,
  contStyle: {
    backgroundColor: "black",
  },
  iconProps: {
    width: 25,
    height: 25,
    fill: "#FD5750",
  },
};

const technologies = [
  javascript,
  python,
  react,
  nextjs,
  redux,
  aws,
  mongodb,
  nodejs,
  expressjs,
  xstate,
  github,
  awsAPIGateway,
  awsEC2,
  awsS3,
  awsLambda,
  awsCloudfront,
  awsDynamoDb,
  serverless,
].sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}, 0);

export default technologies;
