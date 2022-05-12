#!/usr/bin/env bash
yarn install
cd ./packages/creasy-core
yarn storybook:build

aws s3 sync ./storybook-static/ s3://creasyui.furryear.com --delete

