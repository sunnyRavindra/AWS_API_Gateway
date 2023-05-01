#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsApiGatewayStack } from '../lib/aws_api_gateway-stack';

const app = new cdk.App();

new AwsApiGatewayStack(app, 'AwsApiGatewayStack', {env: { account: '274832540160', region: 'eu-central-1' } } );