import { writable } from 'svelte/store';
import { ERROR, LOADING, LOADED } from './constants';
import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://rastrdigital.cdn.prismic.io/api/v2';
const apiToken =
  'MC5YLUFBRHhBQUFDUUFWZ0E4.77-977-977-9He-_ve-_ve-_ve-_vWjvv73vv73vv71R77-977-977-9TjJIMu-_ve-_vT3vv70aZzXvv71dM--_vTc';
// implement caching!!
export const cache = new Map();
export const data = writable(undefined);
export const dataState = writable(null);

const transformer = ({
  body,
  website,
  logo,
  phone,
  name,
  area,
  social,
  download,
  download_icon,
}) => ({
  contact: {
    website,
    phone,
    logo,
    name,
    area,
  },
  headers: body[0].items.map((obj) => obj.section_header),
  highlights: body[1].items,
  skills: body[2].items,
  work: [...Array(4).keys()].map((item, i) => ({
    ...body[3 + i].primary,
    skills: body[3 + i].primary['skills-csv'].split(',').map((el) => el.trim()),
    otherSkills: body[3 + i].primary['skills2-csv']
      ? body[3 + i].primary['skills2-csv'].split(',').map((el) => el.trim())
      : '',
    details: body[3 + i].items,
  })),
  development: body[7].items,
  volunteer: body[8].items,
  education: body[9].items[0],
  interests: body[10].items.map((obj) => obj.item),
  social,
  download: {
    ...download,
    icon: download_icon.url,
    alt: download_icon.alt,
  },
});

export const getData = async () => {
  try {
    dataState.set(LOADING);
    const api = await Prismic.getApi(apiEndpoint, { accessToken: apiToken });
    const query = await api.query(
      Prismic.Predicates.at('document.type', 'resume')
    );
    const querySocial = await api.query(
      Prismic.Predicates.at('document.type', 'social_share')
    );

    const res = await {
      ...query.results[0].data,
      social: querySocial.results[0].data.social,
    };

    data.set(transformer(res));
    console.log(transformer(res));
    console.log(res);
    dataState.set(LOADED);
    return await transformer(res);
  } catch (err) {
    dataState.set(ERROR);
    console.log('Something went wrong: ', err);
  }

  data.subscribe((val) => {
    console.log('val', transformer(val));
  });
};
