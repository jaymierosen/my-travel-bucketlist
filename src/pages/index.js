import React from 'react';
import { Helmet } from 'react-helmet';
import { Marker, Popup } from 'react-leaflet';

// Hooks
import { useDestinations } from 'hooks';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import Form from 'components/Form';

const LOCATION = {
  lat: 0,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

const IndexPage = () => {
  const { destinations } = useDestinations();

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    if ( !map ) return;
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings}>
        { destinations.map(destination => {
          const { id, name, location } = destination;
          const position = [location.latitude, location.longitude];
          return (
            <Marker key={id} position={position}>
              <Popup>{ name }</Popup>
            </Marker>
          );
        })}
      </Map>

      <Container type="content" className="text-center home-start">
        <h2>My Destinations</h2>
        <ul>
          { destinations.map(destination => {
            const { id, name } = destination;
            return <li key={id}>{ name }</li>
          })}
        </ul>
        <Form />
      </Container>
    </Layout>
  );
};

export default IndexPage;