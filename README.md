# Bill Splitter

## Specification

### Phase One

Users should be able to:

- Enter a bill amount
- Enter a tip percentage
- Enter the number of people dining
- Hit the submit button and see the following displayed in the DOM with appropriate tags and naming:
  - the original bill amount
  - the tip amount and total (bill amount + tip amount)
  - the amount owed by each diner when the bill is split

(Don't worry about floating point rounding errors.)

### Phase Two

- Clear out bill, tip, and number of people dining inputs after submitting.
- The default number of diners is 1.
- The submit button should be disabled if there is no content in either tip amount or bill amount input field.
- The submit button should be enabled if there is valid content in both tip amount or bill amount input fields.
