import {defineType, defineField} from 'sanity'

/**
 * Sanity schema for an Event document.
 * @typedef {Object} Event
 * @property {string} title - The title of the event.
 * @property {string} description - A written description of the event.
 * @property {string} timeDescription - A description of the time the event takes place.
 * @property {string} locationDescription - A description of the location the event takes place at.
 * @property {datetime} formattedData - Date formatted for ordering events chronilogically.
 * @property {Image} img - The main image for the event.
 * @property {string} altDescription - Description of the image for accessibility.
 * @property {Array<Link>} [links] - Related links for the event (Optional).
 */
export const eventType = defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    {
      name: 'timeDescription',
      type: 'string',
      title: 'Time Description (Optional)',
      description:
        'Enter the time of the event in any format that fits best (e.g. "August 20-22, starting at 6:00 PM PST each day").',
    },
    {
      name: 'locationDescription',
      type: 'string',
      title: 'Location Description (Optional)',
      description: 'Enter the location of the event.',
    },
    {
      name: 'formattedDate',
      type: 'datetime',
      title: 'Formatted Time',
      description:
        'Enter the start time and date of the event. No need to be exact, this is only used to order them chronologically on the page.',
      validation: (Rule) => Rule.required().error('Start date is required'),
    },
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'altText',
      title: 'Image Description',
      description: 'Include a description of the image for those who use screen readers.',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'The display text for the link (e.g., "RSVP", "Registration Form").',
            },
            {
              name: 'href',
              title: 'URL',
              type: 'url',
              description:
                'The full URL that the link should point to (e.g., https://example.com).',
            },
          ],
        },
      ],
    }),
  ],
})
