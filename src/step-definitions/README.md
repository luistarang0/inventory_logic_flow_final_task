# Sorting validation logic (UC-1)

## Overview

The point of this test is to verify that the "Price low to high" sorting functionality works correctly, comparing the prices displayed against the same prices mathematically sorted

## How prices are collected

To collect the prices, we created a component called ItemList, used to collect ALL the items cards and search for their price text inside their structure, where we use the $$() command to fetch the list of elements

## Data tranformation

The price is retrieved as a text formatted as "$29.99". So we needed to clean the dollar sign to extract just the float number replacing it with a '' empty string, and then we also had to parse the result (fortunately JS provides functions to do that)

## Comparison

We needed to create a copy of the array of numbers to sort it and avoid comparing it with the same reference, which would make the test always pass

## Assertion

We use WDIO's expect().toEqual() assertion, to compare both arrays and throw an error if there is no equality