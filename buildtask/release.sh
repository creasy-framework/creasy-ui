#!/usr/bin/env bash
yarn install
git checkout .
git config --global user.email "rivneg@outlook.com"
git config --global user.name "CI"
yarn release