# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

`cdk init app --language typescript`
`cdk ls`


# AWS_API_Gateway

## Resoposibility
1. Creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale.
2. resources ->  resource is a logical entity that an app can access through a resource path
3. methods -> method corresponds to a REST API request that is submitted by the user of your API and the response returned to the user
4. Implement standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE.
5. These tasks include traffic management, authorization and access control, monitoring, and API version management. 
6. API Gateway acts as a "front door" for applications to access data, business logic, or functionality from your backend services, such as workloads running on Amazon Elastic Compute Cloud (Amazon EC2), code running on AWS Lambda, any web application, or real-time communication applications.
7. stateful ->(WebSocket)
8. stateless -> (HTTP and REST) APIs


    Support for stateful (WebSocket) and stateless (HTTP and REST) APIs.

    Powerful, flexible authentication mechanisms, such as AWS Identity and Access Management policies, Lambda authorizer functions, and Amazon Cognito user pools.

    Canary release deployments for safely rolling out changes.

    CloudTrail logging and monitoring of API usage and API changes.

    CloudWatch access logging and execution logging, including the ability to set alarms. For more information, see Monitoring REST API execution with Amazon CloudWatch metrics and Monitoring WebSocket API execution with CloudWatch metrics.

    Ability to use AWS CloudFormation templates to enable API creation. For more information, see Amazon API Gateway Resource Types Reference and Amazon API Gateway V2 Resource Types Reference.

    Support for custom domain names.

    Integration with AWS WAF for protecting your APIs against common web exploits.

    Integration with AWS X-Ray for understanding and triaging performance latencies.

HTTP APIs support OpenID Connect and OAuth 2.0 authorization. They come with built-in support for cross-origin resource sharing (CORS) and automatic deployments.

## Steps to configure projject 