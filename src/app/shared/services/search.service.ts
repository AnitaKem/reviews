import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Place, ContactType } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private endpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getPlaces(text: string, city: string) {
    const places: Array<Place> = [{
      name: 'Му-Му',
      address: {
        city: 'Москва',
        street: 'улица Коровий Вал',
        house: '1'
      },
      tags: [
        'Кафе',
        'доставка еды и обедов',
        'суши-бар',
        'сеть кафе'
      ],
      apiInfo: {
        'YandexMaps': {
          id: '1145449555',
          rating: 8.399999618530273,
          reviewsQty: 247,
          url: 'https://yandex.ru/maps/org/1145449555',
          photo: 'https://avatars.mds.yandex.net/get-altay/474904/2a0000015e980fea5771ed3d6d3b9a0221d4/XXL',
          likes: 0,
          dislikes: 0
        },
        'Flamp': {
          id: '4504127908547000',
          rating: 8,
          reviewsQty: 19,
          url: 'https://moscow.flamp.ru/firm/mu_mu_set_kafe-4504127908547000',
          photo: '',
          likes: 0,
          dislikes: 0
        }
      },
      contacts: [
        {
          number: '+7 (499) 678-40-06',
          type: ContactType.Phone
        },
        {
          number: '+7 (495) 781-87-81',
          type: ContactType.Phone,
          info: 'Служба доставки'
        }
      ],
      avgPrice: 360
    },
    {
      name: 'Му-Му',
      address: {
        city: 'Москва',
        street: 'Таганская улица',
        house: '3'
      },
      tags: [
        'Кафе',
        'суши-бар',
        'сеть кафе'
      ],
      apiInfo: {
        'YandexMaps': {
          id: '1123501418',
          rating: 8.600000381469727,
          reviewsQty: 129,
          url: 'https://yandex.ru/maps/org/1123501418',
          photo: 'https://avatars.mds.yandex.net/get-altay/492546/2a0000015ece43a46c2d0d7cdd562a05c457/XXL',
          likes: 0,
          dislikes: 0
        },
        'Flamp': {
          id: '4504127908546996',
          rating: 8,
          reviewsQty: 26,
          url: 'https://moscow.flamp.ru/firm/mu_mu_set_kafe-4504127908546996',
          photo: '',
          likes: 0,
          dislikes: 0
        }
      },
      contacts: [
        {
          number: '+7 (495) 781-87-81',
          type: ContactType.Phone,
          info: 'Служба доставки'
        },
        {
          number: '+7 (985) 178-91-19',
          type: ContactType.Phone
        }
      ],
      avgPrice: 360
    },
    {        
      name: 'Му-Му',
      address: {
        city: 'Москва',
        street: 'Климентовский переулок',
        house: '10, стр. 1'
      },
      tags: [
        'Кафе',
        'доставка еды и обедов',
        'суши-бар',
        'сеть кафе'
      ],
      apiInfo: {
        'YandexMaps': {
          id: '1093397443',
          rating: 8.399999618530273,
          reviewsQty: 170,
          url: 'https://yandex.ru/maps/org/1093397443',
          photo: 'https://avatars.mds.yandex.net/get-altay/910613/2a0000016243ad48d70c9c12486f6fec9b26/XXL',
          likes: 0,
          dislikes: 0
        },
        'Flamp': {
          id: '4504127909235065',
          rating: 6,
          reviewsQty: 22,
          url: 'http://moscow.flamp.ru/firm/mu_mu_set_kafe-4504127909235065',
          photo: '',
          likes: 0,
          dislikes: 0
        }
      },
      contacts: [
        {
          number: '+7 (495) 781-87-81',
          type: ContactType.Phone,
          info: 'Служба доставки'
        },
        {
          number: '+7 (499) 678-40-25',
          type: ContactType.Phone
        },
        {
          number: '+7 (495) 953-90-00',
          type: ContactType.Phone
        }
      ],
      avgPrice: null
    },
    {
      name: 'Му-Му',
      address: {
        city: 'Москва',
        street: 'улица Арбат',
        house: '4, стр. 1'
      },
      tags: [
        'Кафе',
        'доставка еды и обедов',
        'суши-бар',
        'сеть кафе',
        'Кафе'
      ],
      apiInfo: {
        'YandexMaps': {
          id: '1033276952',
          rating: 8.600000381469727,
          reviewsQty: 234,
          url: 'https://yandex.ru/maps/org/1033276952',
          photo: 'https://avatars.mds.yandex.net/get-altay/859900/2a0000015ed4cb579ffb5fe7059e5484c92c/XXL',
          likes: 0,
          dislikes: 0
        },
        'Flamp': {
          id: '4504127911171856',
          rating: 8,
          reviewsQty: 350,
          url: 'https://moscow.flamp.ru/firm/mu_mu_set_kafe-4504127911171856',
          photo: '',
          likes: 0,
          dislikes: 0
        },
        'Afisha': {
          id: '34469',
          rating: 0,
          reviewsQty: 0,
          url: 'https://www.afisha.ru/msk/restaurant/34469/',
          photo: '',
          likes: 0,
          dislikes: 0
        }
      },
      contacts: [
        {
          number: '+7 (985) 178-86-68',
          type: ContactType.Phone
        },
        {
          number: '+7 (495) 781-87-81',
          type: ContactType.Phone,
          info: 'Служба доставки'
        }
      ],
      avgPrice: 360
    }];
    return this.http.get(`${this.endpoint}/places/${text}/${city}`).pipe(
      map(result => result as Array<Place>),
    );
  }

  public getCities(): Observable<Array<string>> {
    return this.http.get(`${this.endpoint}/cities`).pipe(
      map(result => result as Array<string>)
    );
  }
}
