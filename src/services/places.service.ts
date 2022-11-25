import { GooglePlaceInfo } from 'types/index';

export const PlacesService = {
  getPlaceInfo({ placeId, width }: { placeId: string; width: number }) {
    return new Promise((resolve, reject) => {
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
      );
      const service = new google.maps.places.PlacesService(map);
      const request = {
        placeId: placeId,
        fields: ['name', 'photos', 'geometry'],
      };

      service.getDetails(request, (place, status) => {
        if (
          place?.photos?.length &&
          status === google.maps.places.PlacesServiceStatus.OK
        ) {
          const placeInfo: GooglePlaceInfo = {
            name: place.name as string,
            lat: place.geometry?.location?.lat() as number,
            lng: place.geometry?.location?.lng() as number,
            photoUrl: place.photos[0].getUrl({
              maxWidth: width,
            }),
          };
          resolve(placeInfo);
        } else {
          reject('Error: Place is not found');
        }
      });
    });
  },
};
