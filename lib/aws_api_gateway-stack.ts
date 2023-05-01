import * as cdk from 'aws-cdk-lib';
import { Cors, LambdaRestApi, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Code, Runtime, Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import path = require('path');
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //API gateway
    // const api = new RestApi(this, 'books-api');
    // const books = api.root.addResource('books');
    // books.addMethod('GET');
    // api.root.addMethod('ANY');
    // books.addMethod('GET');
    // books.addMethod('POST');
    // const book = books.addResource('{book_id}');
    // book.addMethod('GET');
    // book.addMethod('DELETE');

    //Lambda Function
    const ActivationSS = new Function(this, 'ActivationSS', {
      functionName:'ActivationSS',
      runtime: Runtime.NODEJS_14_X,
      handler: 'ActivationSS.handler',
      code: Code.fromAsset(path.join(__dirname, '../lambda')),
    });


    //LambdabackedAPI
    const api = new LambdaRestApi(this, 'ActivationSS-API', {
      restApiName : 'ActivationSS-API',
      description: 'Activate card API',
      handler: ActivationSS,
      proxy: false,
      deployOptions:{stageName:'Test'},
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS 
      }
    });

    const items = api.root.addResource('Activation');
    items.addMethod('GET');  
    items.addMethod('POST'); 

// const item = items.addResource('{item}');
// item.addMethod('GET');   // GET /items/{item}

// the default integration for methods is "handler", but one can
// customize this behavior per method or even a sub path.
// item.addMethod('DELETE', new apigateway.HttpIntegration('http://amazon.com'));




  }
}
