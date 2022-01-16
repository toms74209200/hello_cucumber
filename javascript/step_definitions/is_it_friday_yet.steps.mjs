import { defineFeature, loadFeature } from 'jest-cucumber';
const feature = loadFeature('features/is_it_friday_yet.feature');

defineFeature(feature, (test) => {
  let today;
  let actualAnswer;
  test('Sunday isn\'t Friday', ({ given, when, then }) => {
    given('today is Sunday', () => {
      today = 'Sunday';
    });
    when('I ask whether it\'s Friday yet', () => {
      actualAnswer = isItFriday(today);
    });

    then(/^I should be told "(.*)"$/, (expectedAnswer) => {
      expect(actualAnswer).toBe(expectedAnswer);
    });
  });
  test('Friday is Friday', ({ given, when, then }) => {
    given('today is Friday', () => {
      today = 'Friday';
    });
    when('I ask whether it\'s Friday yet', () => {
      actualAnswer = isItFriday(today);
    });

    then(/^I should be told "(.*)"$/, (expectedAnswer) => {
      expect(actualAnswer).toBe(expectedAnswer);
    });
  });
});

function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}
