const Deployer = require('cra-deployer').default;

const deploy = () => {
  const deployer = new Deployer({
    s3Bucket: 'jorgemananes.com',
    cloudfrontDistribution: 'E38X3QZC871RVW',
  });

  deployer.start();
};

deploy();
