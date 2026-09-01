Now,  I need to reorganize the packages. I will give you the list of destinations along with the respective regions. You replace the existing packages with the ones I am providing now.

Region: Central Asia
- Russia
- CIS Countries:
    - Georgia
    - Azerbaijan
    - Uzbekistan
    - Kazakistan
    - Armenia
- China
- Japan

Region: South East Asia
- Singapore
- Malaysi
- Thailand
- Vietnam
- Cambodia
- Phillipenes
- Bali (Indonesia)
- Maldives
- Hong Kong
- Sri Lanka

Region: Europe
- UK: London, Scotland, Wales, Northern Ireland
- Germany
- France
- Italy
- Vatican City
- Switzerland
- Malta
- Spain
- Austria
- Greece
- Portugal

Region: Middle East
- Dubai
- Saudi Arabia
- Turkey
- Jordan
- Qatar
- Abu Dhabi

Region: Africa
- Egypt
- Morocco
- Kenya
- Tanzania
- Seychells
- South Africa

Region: Austrila
- Australia
- New Zealand

Region: America
- Niagara Falls
- Boston
- Grand Canyon
- New York City
- Washington D.C.
- Los Angeles
- Chicago
- San Francisco
- Miami

Region: Domestic
- Leh & Ladakh
- Kashmir
- Himachal Pradesh
    | Package Name                              | Duration | Highlights                                              |
    | ----------------------------------------- | -------- | ------------------------------------------------------- |
    | **Enchanting Shimla & Manali Escape**     | 5N/6D    | Shimla, Kufri, Kullu, Manali, Solang Valley             |
    | **Romantic Himachal Honeymoon**           | 6N/7D    | Shimla, Manali, Candlelight Dinner, Private Cab         |
    | **Majestic Himachal Explorer**            | 7N/8D    | Shimla, Manali, Dharamshala, Dalhousie                  |
    | **Adventure Himachal Trail**              | 6N/7D    | Solang Valley, Atal Tunnel, River Rafting, Paragliding  |
    | **Spiti Valley Expedition**               | 8N/9D    | Kaza, Key Monastery, Chandratal, High-altitude Villages |
    | **Kasol & Tosh Backpacking Tour**         | 4N/5D    | Kasol, Manikaran, Tosh, Café Trail                      |
    | **Himalayan Serenity Retreat**            | 5N/6D    | Tirthan Valley, Jibhi, Jalori Pass                      |
    | **Dalhousie & Khajjiar Delight**          | 4N/5D    | Mini Switzerland of India, Pine Forests                 |
    | **Complete Himachal Panorama**            | 9N/10D   | Shimla, Manali, Kasol, Dharamshala, Dalhousie           |
    | **Snow & Mountains Special** *(Seasonal)* | 5N/6D    | Snow activities in Manali & Solang                      |

- Uttarakhand
    | Package Name                            | Duration | Highlights                                 |
    | --------------------------------------- | -------- | ------------------------------------------ |
    | **Mystical Uttarakhand Escape**         | 5N/6D    | Nainital, Bhimtal, Mukteshwar              |
    | **Mussoorie & Rishikesh Delight**       | 5N/6D    | Queen of Hills, River Rafting, Ganga Aarti |
    | **Auli Snow Adventure**                 | 5N/6D    | Skiing, Cable Car, Joshimath               |
    | **Nainital & Corbett Wildlife Tour**    | 5N/6D    | Lakes, Jungle Safari                       |
    | **Kumaon Hills Discovery**              | 6N/7D    | Almora, Kausani, Ranikhet                  |
    | **Garhwal Heritage Tour**               | 6N/7D    | Dehradun, Mussoorie, Dhanaulti             |
    | **Valley of Flowers Trek** *(Seasonal)* | 6N/7D    | UNESCO World Heritage Trek                 |
    | **Rishikesh Adventure Camp**            | 3N/4D    | Rafting, Bungee Jumping, Camping           |
    | **Best of Uttarakhand**                 | 8N/9D    | Mussoorie, Rishikesh, Nainital, Corbett    |
    | **Devbhoomi Spiritual Journey**         | 5N/6D    | Haridwar, Rishikesh, Neelkanth Temple      |

- Goa
- Gujarat
- Maharashtra
- Andamans & Nicobar
- Kerala
- Tamil Nadu
- Pondicherry
- Lakshwadeep
- Megalaya (w/ Shillong)
- Sikkim
- Darjeeling
- Arunachal Pradesh
- Char Dhaam

Now, let's move forward one by one regions. You need to create all the required details, content, itenaries, images for the respective packages. Keep in mind, the images should be bright looking.


## Table `regions`

Stores regions of the

### Columns

| Name | Type | Constraints |
|------|------|-------------|
| `slug` | `text` | Primary |
| `name` | `text` |  |
| `kind` | `package-kind` |  |
| `tag` | `text` |  |
| `image` | `text` |  |

## Table `sub_regions`

Sub regions that group certain packages or destinations under certain factors

### Columns

| Name | Type | Constraints |
|------|------|-------------|
| `region_slug` | `text` | Primary |
| `sub_region_slug` | `text` | Primary |
| `name` | `text` |  |

## Table `packages`

### Columns

| Name | Type | Constraints |
|------|------|-------------|
| `slug` | `text` | Primary |
| `title` | `text` |  |
| `region` | `text` |  |
| `sub_region` | `text` |  |
| `group_tag` | `text` |  |
| `country` | `text` |  |
| `days` | `int2` |  |
| `nights` | `int2` |  |
| `price_from` | `float8` |  |
| `hero_image` | `text` |  |
| `gallery` | `_text` |  |
| `trip_type` | `text` |  |
| `summary` | `text` |  |
| `overview` | `text` |  |
| `highlights` | `_text` |  |
| `itinerary` | `_json` |  |
| `inclusions` | `_text` |  |
| `exclusions` | `_text` |  |

## Table `trip_type`

### Columns

| Name | Type | Constraints |
|------|------|-------------|
| `trip_type` | `text` | Primary |

## Custom Types / Enums

### `package-kind`

`international` | `domestic`

