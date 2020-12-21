import { writable } from 'svelte/store';
import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://rastrdigital.cdn.prismic.io/api/v2';
const apiToken =
  'MC5YLUFBRHhBQUFDUUFWZ0E4.77-977-977-9He-_ve-_ve-_ve-_vWjvv73vv73vv71R77-977-977-9TjJIMu-_ve-_vT3vv70aZzXvv71dM--_vTc';

export const data = writable(undefined);
export const fetchState = writable('INIT');

const tranformer = ({ body, website, logo, phone, name, area, download }) => ({
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
    details: body[3 + i].items,
  })),
  development: body[7].items,
  volunteer: body[8].items,
  education: body[9].items[0],
  interests: body[10].items.map((obj) => obj.item),
  download,
});

export const getData = async () => {
  fetchState.set('LOADING');
  await Prismic.getApi(apiEndpoint, { accessToken: apiToken })
    .then((api) => api.query(Prismic.Predicates.at('document.type', 'resume')))
    .then(
      (res) => {
        const _data = res.results[0].data;
        data.set(tranformer(_data));
        fetchState.set('DONE');
        console.log(tranformer(_data));
        return tranformer(_data);
      },
      (err) => {
        console.log('Something went wrong: ', err);
      }
    );
};
