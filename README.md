# Coding exercise - Application Report Trend

## Specifications

The task is to read a JSON file containing applications with their timestamps and omni-channels (sales, website, or qr). Provide a method that returns the average number (rounded up) of applications by hour (0 to 23) of the day across the total number of days available. The method also accepts a channel parameter (`all`, `sales`, `website`, and `qr`) to filter the results based on which channel the application came from. An `all` value returns all the applications.

A skeleton code (Ruby) and test (RSpec) has been provided to get you started. Write the necessary code to achieve the requirements and write tests for your solution.

## Data

A JSON data has been provided to get you started: `applications.json`. The fields are:

1. `id`: The ID of the application in UUID format.
2. `timestamp`: The time the application has been created which will be the basis of the report. This is in NZST timezone (+12).
3. `channel`: The omni-channel where the application came from. Valid values are `sales`, `website`, and `qr`.

The JSON file contains three days worth of data which will determine how you calculate the average. You may add more data if necessary to your tests.

## Suggestions

- Make it simple and straightforward.
- Use of code linter is recommended
- Remove unnecessary code or debuggers before submitting

## Deliverable

- Provide the public git repository URL, e.g. GitHub, or a zip archive.
- Update this README file containing the following:
  - Instructions how to run the specs
  - A technical overview of the implementation:
    - Summary or justification of design decisions or architecture
    - Areas to improve further

## Answer
- How to run the spec: rspec spec/application_report_spec.rb
- For improvement:
  - 3.to_f could be dynamic instead of a fixed integer.