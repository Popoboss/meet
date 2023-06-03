import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user has not specified a number let 32 be the default number', ({ given, when, then }) => {
        given('that a user has not specified a number of events', () => {

        });

        when('selecting cities', () => {
            AppWrapper = mount(<App />);
        });

        then('A default number of 32 is loaded on the page', () => {
            expect(AppWrapper.state('eventCount')).toEqual(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('that the user does not want to view all events', async () => {
            AppWrapper = await mount(<App />);
        });

        when('user changes the number of events in the input box', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 2 } };
            NumberOfEventsWrapper.find('.noe-input').simulate(
                'change',
                eventObject
            );
        });


        then('the User should be able to change the number of events they want to see.', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });

});