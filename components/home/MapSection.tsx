import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@component/hooks/useMap';
import Map from './Map';
import type { NaverMap } from '@component/types/map';
import Markers from './Markers';
import useCurrentStore from '@component/hooks/useCurrentStore';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Coordinates } from '@component/types/store';


const MapSection = () => {
  //쿼리가 달린채로 들어올 때 바로 zoom
  const router = useRouter();
  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);
  const initialZoom = useMemo(
    () => (query.get('zoom') ?
      Number(query.get('zoom')) : INITIAL_ZOOM)
    , [query]
  );
  const initialCenter = useMemo<Coordinates>(() =>
    query.get('lat') && query.get('lng') ?
      [Number(query.get('lat')), Number(query.get('lng'))] : INITIAL_CENTER
    , []
  )

  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  }

  return (
    <>
      <Map onLoad={onLoadMap} initialCenter={initialCenter} initialZoom={initialZoom} />
      <Markers />
    </>
  );
};
export default MapSection;
