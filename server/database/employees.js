const allEmployees = [
    {
      gender: 'male',
      name: {
        first: "Diane",
        last: "Coleman",
        title: "Miss",
      },
      location: {
        city: "Geelong",
        coordinates: {
            latitude: '-84.3907', 
            longitude: '73.5046'
        },
        country: "Australia",
        postcode: 6066,
        state: "Northern Territory",
        street: {
            number: 9030,
            name: 'N Stelling Rd'
        },
        timezone: {
            offset: '+5:45',
            description: 'Kathmandu'
        }
      },
      email: 'nihal.balci@example.com',
      login: {
        md5: "8c47ab6c4b149c154a74e243615c9309",
        password: "cards",
        salt: "b44qkJcq",
        sha1: "bd2afaa8fa90cbb51e0efa801572c72a68e15f90",
        sha256: "1e1c377bbfcec8e057e70e2cf4e01e72d9d17c0ec94244fc47a7feb4ccdde615",
        username: "heavyrabbit188",
        uuid: "424be864-90ee-4429-8437-c1db85847637",
      },
      dob: {
        age: 29,
        date: "1994-02-14T14:08:04.239Z"
      },
      registered: {
        age: 7,
        date: "2016-04-25T05:47:35.642Z"
      },
      phone: '(382)-042-7015',
      cell: '(916)-871-6351',
      id: {
        name: 'TFN',
        value: '451179737'
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/50.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg",
      },
      nat: 'TR'
    },
    {
        gender: "female",
        name: {
            first: "Olivia",
            last: "Miller",
            title: "Mrs"
        },
        location: {
            city: "Toronto",
            coordinates: {
            latitude: "43.6532",
            longitude: "-79.3832"
            },
            country: "Canada",
            postcode: "M5V 2H1",
            state: "Ontario",
            street: {
            number: 123,
            name: "Queen Street"
            },
            timezone: {
            offset: "-4:00",
            description: "Eastern Daylight Time"
            }
        },
        email: "olivia.miller@example.com",
        login: {
            md5: "be98b5ac6b06e66ea5c9ecda4c862472",
            password: "secure123",
            salt: "s8TmQ9pL",
            sha1: "72cc7ed39a4060d1e29f8f053af837505ba983c5",
            sha256: "ab411b4a080b946f53076c33a4a1f7e4b6abaa2c5a65eeadbb0d1c2505a27c85",
            username: "oliviam",
            uuid: "d2a5bc06-e850-4e54-8d95-9f144d9e6a20"
        },
        dob: {
            age: 28,
            date: "1993-06-10T12:15:30.987Z"
        },
        registered: {
            age: 6,
            date: "2015-12-01T18:40:20.345Z"
        },
        phone: "(416)-555-7890",
        cell: "(647)-987-6543",
        id: {
            name: "SSN",
            value: "987-65-4321"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/6.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg"
        },
        nat: "CA"
    },
    {
        gender: "male",
        name: {
          first: "Noah",
          last: "Davis",
          title: "Mr"
        },
        location: {
          city: "Los Angeles",
          coordinates: {
            latitude: "34.0522",
            longitude: "-118.2437"
          },
          country: "United States",
          postcode: 90001,
          state: "California",
          street: {
            number: 456,
            name: "Sunset Blvd"
          },
          timezone: {
            offset: "-7:00",
            description: "Pacific Daylight Time"
          }
        },
        email: "noah.davis@example.com",
        login: {
          md5: "7a9e6d8c53f55d0c206b72e1ce4c0c6d",
          password: "secure456",
          salt: "s5LpA6dR",
          sha1: "5cbe9ff3f517e53481e5b5c238e6ff4f45f25d34",
          sha256: "32d1a1d8f1d63fc347dd81fc24c52533f2d69a625d8b6938a036cf20822a438e",
          username: "noahd",
          uuid: "f568da60-53d9-4237-925f-04a042e12345"
        },
        dob: {
          age: 35,
          date: "1986-09-18T16:45:18.765Z"
        },
        registered: {
          age: 9,
          date: "2012-02-22T09:30:25.567Z"
        },
        phone: "(213)-555-1234",
        cell: "(310)-987-6543",
        id: {
          name: "SSN",
          value: "987-65-4321"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/7.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg"
        },
        nat: "US"
    },
    {
        gender: "female",
        name: {
          first: "Sophia",
          last: "Wilson",
          title: "Miss"
        },
        location: {
          city: "Paris",
          coordinates: {
            latitude: "48.8566",
            longitude: "2.3522"
          },
          country: "France",
          postcode: "75001",
          state: "Île-de-France",
          street: {
            number: 789,
            name: "Champs-Élysées"
          },
          timezone: {
            offset: "2:00",
            description: "Central European Summer Time"
          }
        },
        email: "sophia.wilson@example.com",
        login: {
          md5: "4d590d3b3b983f2e55c9d1c9845e91ab",
          password: "secure789",
          salt: "s3ZfQ1tA",
          sha1: "13c2f3f2a63be639b92e73c1776f961e164c14ec",
          sha256: "d94f4a6f8856c33c6b256e9e929cebe5a2c63d6866f8a1a594617b6c23d3b4e8",
          username: "sophiaw",
          uuid: "125fbc48-1e9b-4213-a7a5-6bde5d5c0f12"
        },
        dob: {
          age: 26,
          date: "1995-03-28T12:15:30.987Z"
        },
        registered: {
          age: 5,
          date: "2016-10-05T18:40:20.345Z"
        },
        phone: "(01)-234-5678",
        cell: "(06)-789-1234",
        id: {
          name: "INSEE",
          value: "2950317658123"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/8.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg"
        },
        nat: "FR"
    },
    {
        gender: "male",
        name: {
          first: "Liam",
          last: "Martinez",
          title: "Mr"
        },
        location: {
          city: "Madrid",
          coordinates: {
            latitude: "40.4168",
            longitude: "-3.7038"
          },
          country: "Spain",
          postcode: "28001",
          state: "Community of Madrid",
          street: {
            number: 123,
            name: "Gran Vía"
          },
          timezone: {
            offset: "2:00",
            description: "Central European Summer Time"
          }
        },
        email: "liam.martinez@example.com",
        login: {
          md5: "5d0d5ab9c2c895292e85398a60ec00c1",
          password: "secure123",
          salt: "s4XeB5rP",
          sha1: "4ad798301e1eb9cbb1a702c9b799968b2bba7481",
          sha256: "68932c172de8b3833d5b10183ca7c55f0889e7753c079c5e78b970ae4b7d773f",
          username: "liamm",
          uuid: "9ca40e09-15b1-45f3-b34a-12db29234abc"
        },
        dob: {
          age: 29,
          date: "1992-02-08T14:08:04.239Z"
        },
        registered: {
          age: 7,
          date: "2014-04-15T05:47:35.642Z"
        },
        phone: "(91)-123-4567",
        cell: "(634)-987-6543",
        id: {
          name: "NIF",
          value: "12345678X"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/10.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/10.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/10.jpg"
        },
        nat: "ES"
    },
    {
        gender: "female",
        name: {
          first: "Ava",
          last: "Garcia",
          title: "Miss"
        },
        location: {
          city: "Los Angeles",
          coordinates: {
            latitude: "34.0522",
            longitude: "-118.2437"
          },
          country: "United States",
          postcode: 90001,
          state: "California",
          street: {
            number: 456,
            name: "Sunset Blvd"
          },
          timezone: {
            offset: "-7:00",
            description: "Pacific Daylight Time"
          }
        },
        email: "ava.garcia@example.com",
        login: {
          md5: "7f4c9bf522782b592e2d4a6a6a2a9db5",
          password: "secure456",
          salt: "s9BmE2tS",
          sha1: "9323ddc97f9de53a4e60d96e2975bf01f7b499a0",
          sha256: "06d0d5bb5c13810e6a5e26fb35b9a9901f9160fe751f383f430bae4f4d64d036",
          username: "avag",
          uuid: "7f29d97b-3bea-4fca-80c2-5558a4321abc"
        },
        dob: {
          age: 27,
          date: "1994-11-05T12:15:30.987Z"
        },
        registered: {
          age: 6,
          date: "2015-03-22T18:40:20.345Z"
        },
        phone: "(213)-555-1234",
        cell: "(310)-987-6543",
        id: {
          name: "SSN",
          value: "987-65-4321"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/12.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/12.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg"
        },
        nat: "US"
    },
    {
        gender: "male",
        name: {
          first: "Ethan",
          last: "Anderson",
          title: "Mr"
        },
        location: {
          city: "New York",
          coordinates: {
            latitude: "40.7128",
            longitude: "-74.0060"
          },
          country: "United States",
          postcode: 10001,
          state: "New York",
          street: {
            number: 789,
            name: "Broadway"
          },
          timezone: {
            offset: "-4:00",
            description: "Eastern Daylight Time"
          }
        },
        email: "ethan.anderson@example.com",
        login: {
          md5: "2c15eeb94b18f4a8b628c4daa3831907",
          password: "secure123",
          salt: "s1YpQ2uR",
          sha1: "f91285f41e8ec8d4e01e1cc8d853b22d4cbce567",
          sha256: "e48d37643cdd322045c2295cfd44be0986c99e59b6a5b810c6f8b3ee30d50f9f",
          username: "ethana",
          uuid: "12345f6d-7e8f-9012-a34b-c5d6789e0abc"
        },
        dob: {
          age: 28,
          date: "1993-09-22T14:08:04.239Z"
        },
        registered: {
          age: 5,
          date: "2016-07-15T05:47:35.642Z"
        },
        phone: "(212)-555-6789",
        cell: "(347)-987-6543",
        id: {
          name: "SSN",
          value: "987-65-4321"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/14.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
        },
        nat: "US"
    },
    {
        gender: "female",
        name: {
          first: "Mia",
          last: "Walker",
          title: "Miss"
        },
        location: {
          city: "Melbourne",
          coordinates: {
            latitude: "-37.8136",
            longitude: "144.9631"
          },
          country: "Australia",
          postcode: 3000,
          state: "Victoria",
          street: {
            number: 123,
            name: "Collins Street"
          },
          timezone: {
            offset: "+10:00",
            description: "Australian Eastern Standard Time"
          }
        },
        email: "mia.walker@example.com",
        login: {
          md5: "6b39a3a6a43c5c169d18abfd7811f947",
          password: "secure456",
          salt: "s5WxP4tK",
          sha1: "e9fe2edaf68e4ad6b384fe56a04c71546a9ab489",
          sha256: "f99425d1cc3ec9efb42f5c5d06786c1e6b3a50f6f0404c6ef3c83a06e13ea3bf",
          username: "miaw",
          uuid: "6789ab01-cdef-2345-6789-0123abcdef45"
        },
        dob: {
          age: 24,
          date: "1997-12-18T12:15:30.987Z"
        },
        registered: {
          age: 4,
          date: "2017-11-10T18:40:20.345Z"
        },
        phone: "(03)-555-7890",
        cell: "(041)-987-6543",
        id: {
          name: "TFN",
          value: "876543210"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/16.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg"
        },
        nat: "AU"
    },
    {
        gender: "male",
        name: {
          first: "Logan",
          last: "Harris",
          title: "Mr"
        },
        location: {
          city: "Chicago",
          coordinates: {
            latitude: "41.8781",
            longitude: "-87.6298"
          },
          country: "United States",
          postcode: 60601,
          state: "Illinois",
          street: {
            number: 123,
            name: "Michigan Avenue"
          },
          timezone: {
            offset: "-5:00",
            description: "Central Daylight Time"
          }
        },
        email: "logan.harris@example.com",
        login: {
          md5: "0d5d8a3e3e1ec1c2d9a19ed604a284c0",
          password: "secure123",
          salt: "s0ZaE9xR",
          sha1: "23f56d8a2856ec1d3f1ac5d6782e134bf789a2b6",
          sha256: "9c63e0879b5678a3b5ef01a7c452156eb18ecff9234518907f2a1e345d2e769c",
          username: "loganh",
          uuid: "567890ab-cdef-1234-5678-9012abcdef34"
        },
        dob: {
          age: 31,
          date: "1990-11-30T14:08:04.239Z"
        },
        registered: {
          age: 8,
          date: "2013-03-25T05:47:35.642Z"
        },
        phone: "(312)-555-6789",
        cell: "(773)-987-6543",
        id: {
          name: "SSN",
          value: "876-54-3210"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/18.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg"
        },
        nat: "US"
    },
    {
        gender: "female",
        name: {
          first: "Harper",
          last: "Clark",
          title: "Miss"
        },
        location: {
          city: "Toronto",
          coordinates: {
            latitude: "43.6532",
            longitude: "-79.3832"
          },
          country: "Canada",
          postcode: "M5V 2H1",
          state: "Ontario",
          street: {
            number: 123,
            name: "Queen Street"
          },
          timezone: {
            offset: "-4:00",
            description: "Eastern Daylight Time"
          }
        },
        email: "harper.clark@example.com",
        login: {
          md5: "aa33589c1f8a4ea7c67ed164a7ca8f91",
          password: "secure456",
          salt: "s5HcP4tK",
          sha1: "b045b3d26e4d7ccf9b780a5e063073a5f15f3c3d",
          sha256: "7c21d8a3c61b79d5f041bb246b7e44bde8f9a4826d2d3d0bc6e884d11a45138f",
          username: "harperc",
          uuid: "34567890-12ab-cdef-2345-6789012abcdef"
        },
        dob: {
          age: 23,
          date: "1998-04-05T12:15:30.987Z"
        },
        registered: {
          age: 3,
          date: "2020-01-15T18:40:20.345Z"
        },
        phone: "(416)-555-7890",
        cell: "(647)-987-6543",
        id: {
          name: "NINO",
          value: "87654321A"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/20.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg"
        },
        nat: "CA"
    },
    {
        gender: "male",
        name: {
          first: "James",
          last: "Parker",
          title: "Mr"
        },
        location: {
          city: "London",
          coordinates: {
            latitude: "51.5074",
            longitude: "-0.1278"
          },
          country: "United Kingdom",
          postcode: "SW1A 1AA",
          state: "England",
          street: {
            number: 10,
            name: "Downing Street"
          },
          timezone: {
            offset: "1:00",
            description: "British Summer Time"
          }
        },
        email: "james.parker@example.com",
        login: {
          md5: "9325792c45b03c667ff04bafd880b023",
          password: "secure123",
          salt: "s1AbC2dE",
          sha1: "85f6789a3456b78c3d9ef01a2367098b5de6b789",
          sha256: "72d4567ef01ab7c8902345d67891a23c45678d90a123e456c7890abc567def01",
          username: "jamesp",
          uuid: "78901abcdef2-3456-7890-1234-5678cdef0123"
        },
        dob: {
          age: 33,
          date: "1988-07-15T14:08:04.239Z"
        },
        registered: {
          age: 9,
          date: "2012-12-10T05:47:35.642Z"
        },
        phone: "(020)-555-6789",
        cell: "(074)-987-6543",
        id: {
          name: "NHS",
          value: "1234-5678"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/22.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
        },
        nat: "GB"
    },
    {
        gender: "female",
        name: {
          first: "Scarlett",
          last: "Turner",
          title: "Miss"
        },
        location: {
          city: "Sydney",
          coordinates: {
            latitude: "-33.8688",
            longitude: "151.2093"
          },
          country: "Australia",
          postcode: 2000,
          state: "New South Wales",
          street: {
            number: 789,
            name: "George Street"
          },
          timezone: {
            offset: "+10:00",
            description: "Australian Eastern Standard Time"
          }
        },
        email: "scarlett.turner@example.com",
        login: {
          md5: "bcf23109d522b6d44b2104d50517a5c6",
          password: "secure456",
          salt: "s5QxP6tK",
          sha1: "a7b5c67890def1234567890123456789012cdef3",
          sha256: "56a90123456789a0b12345678901234567890cdef12345678901234567890123",
          username: "scarlettt",
          uuid: "67890abc-def1-2345-6789-012345678901"
        },
        dob: {
          age: 26,
          date: "1995-03-12T12:15:30.987Z"
        },
        registered: {
          age: 5,
          date: "2016-09-29T18:40:20.345Z"
        },
        phone: "(02)-555-7890",
        cell: "(04)-987-6543",
        id: {
          name: "TFN",
          value: "987654321"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/24.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg"
        },
        nat: "AU"
    },
    {
        gender: "male",
        name: {
          first: "Benjamin",
          last: "Walker",
          title: "Mr"
        },
        location: {
          city: "Vancouver",
          coordinates: {
            latitude: "49.2827",
            longitude: "-123.1207"
          },
          country: "Canada",
          postcode: "V6B 1H7",
          state: "British Columbia",
          street: {
            number: 789,
            name: "Robson Street"
          },
          timezone: {
            offset: "-7:00",
            description: "Pacific Daylight Time"
          }
        },
        email: "benjamin.walker@example.com",
        login: {
          md5: "6c1af9ac9b3f9c5e6bdc2ee369b22ff7",
          password: "secure123",
          salt: "s7ZmE8tR",
          sha1: "5b92f7140ff7b468a4b8906d00d4c3c8c66de101",
          sha256: "2acdd67890123456789012345678901234567890123456789012345678901234",
          username: "benjaminw",
          uuid: "567890abcd12-e345-6789-0123-45678901234f"
        },
        dob: {
          age: 30,
          date: "1991-01-25T14:08:04.239Z"
        },
        registered: {
          age: 8,
          date: "2013-06-07T05:47:35.642Z"
        },
        phone: "(604)-555-6789",
        cell: "(778)-987-6543",
        id: {
          name: "SSN",
          value: "012-34-5678"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/26.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/26.jpg"
        },
        nat: "CA"
    },
    {
        gender: "female",
        name: {
          first: "Aria",
          last: "Martin",
          title: "Miss"
        },
        location: {
          city: "Los Angeles",
          coordinates: {
            latitude: "34.0522",
            longitude: "-118.2437"
          },
          country: "United States",
          postcode: 90001,
          state: "California",
          street: {
            number: 123,
            name: "Sunset Blvd"
          },
          timezone: {
            offset: "-7:00",
            description: "Pacific Daylight Time"
          }
        },
        email: "aria.martin@example.com",
        login: {
          md5: "d4e6f7a1c8b2a5d3b9f0e2c6a4a8b0e1",
          password: "secure456",
          salt: "s1XcY2zR",
          sha1: "9f7e8d6c5b4a3a2b1f0e",
          sha256: "a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4",
          username: "ariam",
          uuid: "23456789-abcd-ef12-3456-7890abcdef12"
        },
        dob: {
          age: 22,
          date: "1999-08-30T12:15:30.987Z"
        },
        registered: {
          age: 3,
          date: "2018-11-22T18:40:20.345Z"
        },
        phone: "(213)-555-7890",
        cell: "(310)-987-6543",
        id: {
          name: "SSN",
          value: "789-01-2345"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/28.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg"
        },
        nat: "US"
    },
    {
        gender: "male",
        name: {
          first: "Oliver",
          last: "Rodriguez",
          title: "Mr"
        },
        location: {
          city: "Barcelona",
          coordinates: {
            latitude: "41.3851",
            longitude: "2.1734"
          },
          country: "Spain",
          postcode: "08001",
          state: "Catalonia",
          street: {
            number: 123,
            name: "Rambla de Catalunya"
          },
          timezone: {
            offset: "2:00",
            description: "Central European Summer Time"
          }
        },
        email: "oliver.rodriguez@example.com",
        login: {
          md5: "1e7a4b9f1d3a5b2c8e6b4a9d5b2c7a8b",
          password: "secure123",
          salt: "s1YxZ2uR",
          sha1: "9a8b7c6d5e4f3a2b1c0d",
          sha256: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
          username: "oliverr",
          uuid: "34567890-1234-5678-9012-3456789012ab"
        },
        dob: {
          age: 29,
          date: "1992-06-10T14:08:04.239Z"
        },
        registered: {
          age: 7,
          date: "2014-09-01T05:47:35.642Z"
        },
        phone: "(93)-555-6789",
        cell: "(601)-987-6543",
        id: {
          name: "NIF",
          value: "23456789X"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/30.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg"
        },
        nat: "ES"
    },
    {
        gender: "female",
        name: {
          first: "Emma",
          last: "Smith",
          title: "Miss"
        },
        location: {
          city: "Paris",
          coordinates: {
            latitude: "48.8566",
            longitude: "2.3522"
          },
          country: "France",
          postcode: "75001",
          state: "Île-de-France",
          street: {
            number: 123,
            name: "Champs-Élysées"
          },
          timezone: {
            offset: "2:00",
            description: "Central European Summer Time"
          }
        },
        email: "emma.smith@example.com",
        login: {
          md5: "3f5d7a2e1c9b0a8d4b6a2f7e5d9c0b8a",
          password: "secure123",
          salt: "s3VxW2uR",
          sha1: "8d9e7a6b5c4d3f2a1b0e9d8c7b6a5f4e3d2f1a0b",
          sha256: "5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f",
          username: "emmas",
          uuid: "45678901-2345-6789-0123-4567890123cd"
        },
        dob: {
          age: 25,
          date: "1996-05-20T12:15:30.987Z"
        },
        registered: {
          age: 4,
          date: "2017-08-10T18:40:20.345Z"
        },
        phone: "(01)-555-7890",
        cell: "(06)-987-6543",
        id: {
          name: "NIR",
          value: "12345678"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/32.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg"
        },
        nat: "FR"
    },
    {
        gender: "male",
        name: {
          first: "William",
          last: "Baker",
          title: "Mr"
        },
        location: {
          city: "Toronto",
          coordinates: {
            latitude: "43.651070",
            longitude: "-79.347015"
          },
          country: "Canada",
          postcode: "M5V 2H1",
          state: "Ontario",
          street: {
            number: 123,
            name: "King Street"
          },
          timezone: {
            offset: "-4:00",
            description: "Eastern Daylight Time"
          }
        },
        email: "william.baker@example.com",
        login: {
          md5: "1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e",
          password: "secure123",
          salt: "s1TxZ2uR",
          sha1: "9d8c7b6a5f4e3d2a1b0c9d8e7f6a5b4c3d2a1b0c",
          sha256: "7f6e5d4c3b2a1b0c9d8e7f6a5b4c3d2a1b0c9d8e7f6a5b4c3d2a1b0c9d8e7f6a5",
          username: "williamb",
          uuid: "78901234-abcd-ef12-3456-78901234abcd"
        },
        dob: {
          age: 28,
          date: "1993-11-10T14:08:04.239Z"
        },
        registered: {
          age: 7,
          date: "2014-06-01T05:47:35.642Z"
        },
        phone: "(416)-555-7890",
        cell: "(647)-987-6543",
        id: {
          name: "NINO",
          value: "87654321A"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/34.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
        },
        nat: "CA"
    },
    {
        gender: "female",
        name: {
          first: "Sophia",
          last: "Johnson",
          title: "Miss"
        },
        location: {
          city: "New York",
          coordinates: {
            latitude: "40.7128",
            longitude: "-74.0060"
          },
          country: "United States",
          postcode: 10001,
          state: "New York",
          street: {
            number: 123,
            name: "Broadway"
          },
          timezone: {
            offset: "-4:00",
            description: "Eastern Daylight Time"
          }
        },
        email: "sophia.johnson@example.com",
        login: {
          md5: "5e6d7f8a9b0c1d2e3f4a5b6c7d8e9f0a",
          password: "secure123",
          salt: "s1VyW2uR",
          sha1: "8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c",
          sha256: "9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d",
          username: "sophiaj",
          uuid: "89012345-6789-0123-4567-890123456789"
        },
        dob: {
          age: 30,
          date: "1991-09-05T12:15:30.987Z"
        },
        registered: {
          age: 9,
          date: "2012-02-22T18:40:20.345Z"
        },
        phone: "(212)-555-7890",
        cell: "(917)-987-6543",
        id: {
          name: "SSN",
          value: "987-65-4321"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/36.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg"
        },
        nat: "US"
    },
    {
        gender: "male",
        name: {
          first: "Liam",
          last: "Lopez",
          title: "Mr"
        },
        location: {
          city: "Los Angeles",
          coordinates: {
            latitude: "34.0522",
            longitude: "-118.2437"
          },
          country: "United States",
          postcode: 90001,
          state: "California",
          street: {
            number: 123,
            name: "Hollywood Blvd"
          },
          timezone: {
            offset: "-7:00",
            description: "Pacific Daylight Time"
          }
        },
        email: "liam.lopez@example.com",
        login: {
          md5: "9a8b7c6d5e4f3a2b1c0d9a8b7c6d5e4f",
          password: "secure123",
          salt: "s1QxW2zR",
          sha1: "8a7b6c5d4e3f2a1b0c9d8a7b6c5d4e3f2a1b0c9d",
          sha256: "7a6b5c4d3e2f1a0b9c8d7a6b5c4d3e2f1a0b9c8d7a6b5c4d3e2f1a0b9c8d7a6b",
          username: "liaml",
          uuid: "67890123-abcd-ef12-3456-789012345678"
        },
        dob: {
          age: 27,
          date: "1994-02-28T14:08:04.239Z"
        },
        registered: {
          age: 6,
          date: "2015-10-17T05:47:35.642Z"
        },
        phone: "(213)-555-7890",
        cell: "(310)-987-6543",
        id: {
          name: "SSN",
          value: "654-32-1098"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/38.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg"
        },
        nat: "US"
    },
    {
        gender: "female",
        name: {
          first: "Ava",
          last: "Garcia",
          title: "Miss"
        },
        location: {
          city: "Miami",
          coordinates: {
            latitude: "25.7617",
            longitude: "-80.1918"
          },
          country: "United States",
          postcode: 33101,
          state: "Florida",
          street: {
            number: 123,
            name: "Ocean Drive"
          },
          timezone: {
            offset: "-4:00",
            description: "Eastern Daylight Time"
          }
        },
        email: "ava.garcia@example.com",
        login: {
          md5: "8b7a6c5d4e3f2a1b0c9d8b7a6c5d4e3f",
          password: "secure123",
          salt: "s1XxZ2zR",
          sha1: "9c8d7a6b5c4d3e2f1a0b9c8d7a6b5c4d3e2f1a0b",
          sha256: "8d7a6b5c4d3e2f1a0b9c8d7a6b5c4d3e2f1a0b9c8d7a6b5c4d3e2f1a0b9c8d7a",
          username: "avag",
          uuid: "78901234-abcd-ef12-3456-789012345678"
        },
        dob: {
          age: 23,
          date: "1998-12-02T12:15:30.987Z"
        },
        registered: {
          age: 4,
          date: "2017-05-29T18:40:20.345Z"
        },
        phone: "(305)-555-7890",
        cell: "(786)-987-6543",
        id: {
          name: "SSN",
          value: "876-54-3210"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
        },
        nat: "US"
    },
    {
        gender: "male",
        name: {
          first: "Henry",
          last: "Sanchez",
          title: "Mr"
        },
        location: {
          city: "Mexico City",
          coordinates: {
            latitude: "19.4326",
            longitude: "-99.1332"
          },
          country: "Mexico",
          postcode: "06000",
          state: "Mexico City",
          street: {
            number: 123,
            name: "Paseo de la Reforma"
          },
          timezone: {
            offset: "-5:00",
            description: "Central Daylight Time"
          }
        },
        email: "henry.sanchez@example.com",
        login: {
          md5: "6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a",
          password: "secure123",
          salt: "s1YyZ2zR",
          sha1: "8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e",
          sha256: "9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d",
          username: "henrys",
          uuid: "67890123-abcd-ef12-3456-789012345678"
        },
        dob: {
          age: 32,
          date: "1989-03-15T14:08:04.239Z"
        },
        registered: {
          age: 6,
          date: "2015-12-05T05:47:35.642Z"
        },
        phone: "(55)-555-7890",
        cell: "(556)-987-6543",
        id: {
          name: "CURP",
          value: "123456789012345678"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/42.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg"
        },
        nat: "MX"
    },
    {
        gender: "female",
        name: {
          first: "Mia",
          last: "Martinez",
          title: "Miss"
        },
        location: {
          city: "San Francisco",
          coordinates: {
            latitude: "37.7749",
            longitude: "-122.4194"
          },
          country: "United States",
          postcode: 94101,
          state: "California",
          street: {
            number: 123,
            name: "Golden Gate Ave"
          },
          timezone: {
            offset: "-7:00",
            description: "Pacific Daylight Time"
          }
        },
        email: "mia.martinez@example.com",
        login: {
          md5: "5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b",
          password: "secure123",
          salt: "s1QyW2zR",
          sha1: "8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e",
          sha256: "9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d",
          username: "miam",
          uuid: "67890123-abcd-ef12-3456-789012345678"
        },
        dob: {
          age: 29,
          date: "1992-09-12T12:15:30.987Z"
        },
        registered: {
          age: 6,
          date: "2015-04-27T18:40:20.345Z"
        },
        phone: "(415)-555-7890",
        cell: "(628)-987-6543",
        id: {
          name: "SSN",
          value: "765-43-2109"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/44.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg"
        },
        nat: "US"
    },
    {
        gender: "male",
        name: {
          first: "Alexander",
          last: "Taylor",
          title: "Mr"
        },
        location: {
          city: "Melbourne",
          coordinates: {
            latitude: "-37.8136",
            longitude: "144.9631"
          },
          country: "Australia",
          postcode: 3000,
          state: "Victoria",
          street: {
            number: 123,
            name: "Swanston Street"
          },
          timezone: {
            offset: "+10:00",
            description: "Australian Eastern Standard Time"
          }
        },
        email: "alexander.taylor@example.com",
        login: {
          md5: "1a0b9c8d7e6f5a4b3c2d1a0b9c8d7e6f",
          password: "secure123",
          salt: "s1QwX2zR",
          sha1: "9c8d7e6f5a4b3c2d1a0b9c8d7e6f5a4b3c2d1a0b",
          sha256: "8d7e6f5a4b3c2d1a0b9c8d7e6f5a4b3c2d1a0b9c8d7e6f5a4b3c2d1a0b9c8d7e",
          username: "alext",
          uuid: "67890123-abcd-ef12-3456-789012345678"
        },
        dob: {
          age: 31,
          date: "1990-12-08T14:08:04.239Z"
        },
        registered: {
          age: 7,
          date: "2014-03-19T05:47:35.642Z"
        },
        phone: "(03)-555-7890",
        cell: "(049)-987-6543",
        id: {
          name: "TFN",
          value: "567890123"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/46.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/46.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/46.jpg"
        },
        nat: "AU"
    }
]

module.exports = allEmployees;