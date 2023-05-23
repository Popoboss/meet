// src/__tests__/Event.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> componenent', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    })


    test('renders the component', () => {
        expect(EventWrapper).toBeDefined();
    });


    test('summary is rendered correctly in a h2 tag', () => {
        const summary = EventWrapper.find('h2.summary');
        expect(summary).toHaveLength(1);
        expect(summary.text()).toBe(event.summary);
    });


    test('event start time is rendered correctly', () => {
        const eventStart = EventWrapper.find('p.event-start');
        expect(eventStart).toHaveLength(1);
        expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
    });


    test('event location is rendered correctly', () => {
        const eventLocation = EventWrapper.find('p.event-location');
        expect(eventLocation).toHaveLength(1);
        expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);

    });



    test('renders collapsed by default', () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
    });


    test('the collapsed view is rendered correctly', () => {
        expect(EventWrapper.find('h3.about')).toHaveLength(0);
        expect(EventWrapper.find('a.link')).toHaveLength(0);
        expect(EventWrapper.find('p.description')).toHaveLength(0);
    });


    test('user can expand an event when clicking show details button', () => {
        const detailsButton = EventWrapper.find('button.details-btn');
        expect(detailsButton.text()).toBe('show details');
        detailsButton.simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    })


    test('event details is expanded and rendered correctly', () => {
        expect(EventWrapper.find('h3.about')).toHaveLength(1);
        expect(EventWrapper.find('a.link')).toHaveLength(1);
        expect(EventWrapper.find('p.description')).toHaveLength(1);

    });

    test('user can collapse an event when clicking hide details button', () => {
        const detailsButton = EventWrapper.find('button.details-btn');
        expect(detailsButton.text()).toBe('hide details');
        detailsButton.simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    })

});