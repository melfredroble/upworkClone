export default function handler(req, res) {

    const countriesData = [ 
        {name: 'Afghanistan', code: 'AF', values: 'Afghanistan'}, 
        {name: 'Åland Islands', code: 'AX', values: 'Åland Islands'}, 
        {name: 'Albania', code: 'AL', values: 'Albania'}, 
        {name: 'Algeria', code: 'DZ', values: 'Algeria'}, 
        {name: 'American Samoa', code: 'AS', values: 'American Samoa'}, 
        {name: 'AndorrA', code: 'AD', values: 'AndorrA'}, 
        {name: 'Angola', code: 'AO', values: 'Angola'}, 
        {name: 'Anguilla', code: 'AI', values: 'Anguilla'}, 
        {name: 'Antarctica', code: 'AQ', values: 'Antarctica'}, 
        {name: 'Antigua and Barbuda', code: 'AG', values: 'Antigua and Barbuda'}, 
        {name: 'Argentina', code: 'AR', values: 'Argentina'}, 
        {name: 'Armenia', code: 'AM', values: 'Armenia'}, 
        {name: 'Aruba', code: 'AW', values: 'Aruba'}, 
        {name: 'Australia', code: 'AU', values: 'Australia'}, 
        {name: 'Austria', code: 'AT', values: 'Austria'}, 
        {name: 'Azerbaijan', code: 'AZ', values: 'Afghanistan'}, 
        {name: 'Bahamas', code: 'BS', values: 'Afghanistan'}, 
        {name: 'Bahrain', code: 'BH', values: 'Afghanistan'}, 
        {name: 'Bangladesh', code: 'BD', values: 'Afghanistan'}, 
        {name: 'Barbados', code: 'BB', values: 'Afghanistan'}, 
        {name: 'Belarus', code: 'BY', values: 'Afghanistan'}, 
        {name: 'Belgium', code: 'BE', values: 'Afghanistan'}, 
        {name: 'Belize', code: 'BZ', values: 'Afghanistan'}, 
        {name: 'Benin', code: 'BJ', values: 'Afghanistan'}, 
        {name: 'Bermuda', code: 'BM', values: 'Afghanistan'}, 
        {name: 'Bhutan', code: 'BT', values: 'Afghanistan'}, 
        {name: 'Bolivia', code: 'BO', values: 'Afghanistan'}, 
        {name: 'Bosnia and Herzegovina', code: 'BA', values: 'Afghanistan'}, 
        {name: 'Botswana', code: 'BW', values: 'Afghanistan'}, 
        {name: 'Bouvet Island', code: 'BV', values: 'Afghanistan'}, 
        {name: 'Brazil', code: 'BR', values: 'Afghanistan'}, 
        {name: 'British Indian Ocean Territory', code: 'IO', values: 'Afghanistan'}, 
        {name: 'Brunei Darussalam', code: 'BN', values: 'Afghanistan'}, 
        {name: 'Bulgaria', code: 'BG', values: 'Afghanistan'}, 
        {name: 'Burkina Faso', code: 'BF', values: 'Afghanistan'}, 
        {name: 'Burundi', code: 'BI', values: 'Afghanistan'}, 
        {name: 'Cambodia', code: 'KH', values: 'Afghanistan'}, 
        {name: 'Cameroon', code: 'CM', values: 'Afghanistan'}, 
        {name: 'Canada', code: 'CA', values: 'Afghanistan'}, 
        {name: 'Cape Verde', code: 'CV', values: 'Afghanistan'}, 
        {name: 'Cayman Islands', code: 'KY', values: 'Afghanistan'}, 
        {name: 'Central African Republic', code: 'CF', values: 'Afghanistan'}, 
        {name: 'Chad', code: 'TD', values: 'Afghanistan'}, 
        {name: 'Chile', code: 'CL', values: 'Afghanistan'}, 
        {name: 'China', code: 'CN', values: 'Afghanistan'}, 
        {name: 'Christmas Island', code: 'CX', values: 'Afghanistan'}, 
        {name: 'Cocos (Keeling) Islands', code: 'CC', values: 'Afghanistan'}, 
        {name: 'Colombia', code: 'CO', values: 'Afghanistan'}, 
        {name: 'Comoros', code: 'KM', values: 'Afghanistan'}, 
        {name: 'Congo', code: 'CG', values: 'Afghanistan'}, 
        {name: 'Congo, The Democratic Republic of the', code: 'CD', values: 'Afghanistan'}, 
        {name: 'Cook Islands', code: 'CK', values: 'Afghanistan'}, 
        {name: 'Costa Rica', code: 'CR', values: 'Afghanistan'}, 
        {name: 'Cote D\'Ivoire', code: 'CI', values: 'Afghanistan'}, 
        {name: 'Croatia', code: 'HR', values: 'Afghanistan'}, 
        {name: 'Cuba', code: 'CU', values: 'Afghanistan'}, 
        {name: 'Cyprus', code: 'CY', values: 'Afghanistan'}, 
        {name: 'Czech Republic', code: 'CZ', values: 'Afghanistan'}, 
        {name: 'Denmark', code: 'DK', values: 'Afghanistan'}, 
        {name: 'Djibouti', code: 'DJ', values: 'Afghanistan'}, 
        {name: 'Dominica', code: 'DM', values: 'Afghanistan'}, 
        {name: 'Dominican Republic', code: 'DO', values: 'Afghanistan'}, 
        {name: 'Ecuador', code: 'EC', values: 'Afghanistan'}, 
        {name: 'Egypt', code: 'EG', values: 'Afghanistan'}, 
        {name: 'El Salvador', code: 'SV', values: 'Afghanistan'}, 
        {name: 'Equatorial Guinea', code: 'GQ', values: 'Afghanistan'}, 
        {name: 'Eritrea', code: 'ER', values: 'Afghanistan'}, 
        {name: 'Estonia', code: 'EE', values: 'Afghanistan'}, 
        {name: 'Ethiopia', code: 'ET', values: 'Afghanistan'}, 
        {name: 'Falkland Islands (Malvinas)', code: 'FK', values: 'Afghanistan'}, 
        {name: 'Faroe Islands', code: 'FO', values: 'Afghanistan'}, 
        {name: 'Fiji', code: 'FJ', values: 'Afghanistan'}, 
        {name: 'Finland', code: 'FI', values: 'Afghanistan'}, 
        {name: 'France', code: 'FR', values: 'Afghanistan'}, 
        {name: 'French Guiana', code: 'GF', values: 'Afghanistan'}, 
        {name: 'French Polynesia', code: 'PF', values: 'Afghanistan'}, 
        {name: 'French Southern Territories', code: 'TF', values: 'Afghanistan'}, 
        {name: 'Gabon', code: 'GA', values: 'Afghanistan'}, 
        {name: 'Gambia', code: 'GM', values: 'Afghanistan'}, 
        {name: 'Georgia', code: 'GE', values: 'Afghanistan'}, 
        {name: 'Germany', code: 'DE', values: 'Afghanistan'}, 
        {name: 'Ghana', code: 'GH', values: 'Afghanistan'}, 
        {name: 'Gibraltar', code: 'GI', values: 'Afghanistan'}, 
        {name: 'Greece', code: 'GR', values: 'Afghanistan'}, 
        {name: 'Greenland', code: 'GL', values: 'Afghanistan'}, 
        {name: 'Grenada', code: 'GD', values: 'Afghanistan'}, 
        {name: 'Guadeloupe', code: 'GP', values: 'Afghanistan'}, 
        {name: 'Guam', code: 'GU', values: 'Afghanistan'}, 
        {name: 'Guatemala', code: 'GT', values: 'Afghanistan'}, 
        {name: 'Guernsey', code: 'GG', values: 'Afghanistan'}, 
        {name: 'Guinea', code: 'GN', values: 'Afghanistan'}, 
        {name: 'Guinea-Bissau', code: 'GW', values: 'Afghanistan'}, 
        {name: 'Guyana', code: 'GY', values: 'Afghanistan'}, 
        {name: 'Haiti', code: 'HT', values: 'Afghanistan'}, 
        {name: 'Heard Island and Mcdonald Islands', code: 'HM', values: 'Afghanistan'}, 
        {name: 'Holy See (Vatican City State)', code: 'VA', values: 'Afghanistan'}, 
        {name: 'Honduras', code: 'HN', values: 'Afghanistan'}, 
        {name: 'Hong Kong', code: 'HK', values: 'Afghanistan'}, 
        {name: 'Hungary', code: 'HU', values: 'Afghanistan'}, 
        {name: 'Iceland', code: 'IS', values: 'Afghanistan'}, 
        {name: 'India', code: 'IN', values: 'Afghanistan'}, 
        {name: 'Indonesia', code: 'ID', values: 'Afghanistan'}, 
        {name: 'Iran, Islamic Republic Of', code: 'IR', values: 'Afghanistan'}, 
        {name: 'Iraq', code: 'IQ', values: 'Afghanistan'}, 
        {name: 'Ireland', code: 'IE', values: 'Afghanistan'}, 
        {name: 'Isle of Man', code: 'IM', values: 'Afghanistan'}, 
        {name: 'Israel', code: 'IL', values: 'Afghanistan'}, 
        {name: 'Italy', code: 'IT', values: 'Afghanistan'}, 
        {name: 'Jamaica', code: 'JM', values: 'Afghanistan'}, 
        {name: 'Japan', code: 'JP', values: 'Afghanistan'}, 
        {name: 'Jersey', code: 'JE', values: 'Afghanistan'}, 
        {name: 'Jordan', code: 'JO', values: 'Afghanistan'}, 
        {name: 'Kazakhstan', code: 'KZ', values: 'Afghanistan'}, 
        {name: 'Kenya', code: 'KE', values: 'Afghanistan'}, 
        {name: 'Kiribati', code: 'KI', values: 'Afghanistan'}, 
        {name: 'Korea, Democratic People\'S Republic of', code: 'KP', values: 'Afghanistan'}, 
        {name: 'Korea, Republic of', code: 'KR', values: 'Afghanistan'}, 
        {name: 'Kuwait', code: 'KW', values: 'Afghanistan'}, 
        {name: 'Kyrgyzstan', code: 'KG', values: 'Afghanistan'}, 
        {name: 'Lao People\'S Democratic Republic', code: 'LA', values: 'Afghanistan'}, 
        {name: 'Latvia', code: 'LV', values: 'Afghanistan'}, 
        {name: 'Lebanon', code: 'LB', values: 'Afghanistan'}, 
        {name: 'Lesotho', code: 'LS', values: 'Afghanistan'}, 
        {name: 'Liberia', code: 'LR', values: 'Afghanistan'}, 
        {name: 'Libyan Arab Jamahiriya', code: 'LY', values: 'Afghanistan'}, 
        {name: 'Liechtenstein', code: 'LI', values: 'Afghanistan'}, 
        {name: 'Lithuania', code: 'LT', values: 'Afghanistan'}, 
        {name: 'Luxembourg', code: 'LU', values: 'Afghanistan'}, 
        {name: 'Macao', code: 'MO', values: 'Afghanistan'}, 
        {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK', values: 'Afghanistan'}, 
        {name: 'Madagascar', code: 'MG', values: 'Afghanistan'}, 
        {name: 'Malawi', code: 'MW', values: 'Afghanistan'}, 
        {name: 'Malaysia', code: 'MY', values: 'Afghanistan'}, 
        {name: 'Maldives', code: 'MV', values: 'Afghanistan'}, 
        {name: 'Mali', code: 'ML', values: 'Afghanistan'}, 
        {name: 'Malta', code: 'MT', values: 'Afghanistan'}, 
        {name: 'Marshall Islands', code: 'MH', values: 'Afghanistan'}, 
        {name: 'Martinique', code: 'MQ', values: 'Afghanistan'}, 
        {name: 'Mauritania', code: 'MR', values: 'Afghanistan'}, 
        {name: 'Mauritius', code: 'MU', values: 'Afghanistan'}, 
        {name: 'Mayotte', code: 'YT', values: 'Afghanistan'}, 
        {name: 'Mexico', code: 'MX', values: 'Afghanistan'}, 
        {name: 'Micronesia, Federated States of', code: 'FM', values: 'Afghanistan'}, 
        {name: 'Moldova, Republic of', code: 'MD', values: 'Afghanistan'}, 
        {name: 'Monaco', code: 'MC', values: 'Afghanistan'}, 
        {name: 'Mongolia', code: 'MN', values: 'Afghanistan'}, 
        {name: 'Montserrat', code: 'MS', values: 'Afghanistan'}, 
        {name: 'Morocco', code: 'MA', values: 'Afghanistan'}, 
        {name: 'Mozambique', code: 'MZ', values: 'Afghanistan'}, 
        {name: 'Myanmar', code: 'MM', values: 'Afghanistan'}, 
        {name: 'Namibia', code: 'NA', values: 'Afghanistan'}, 
        {name: 'Nauru', code: 'NR', values: 'Afghanistan'}, 
        {name: 'Nepal', code: 'NP', values: 'Afghanistan'}, 
        {name: 'Netherlands', code: 'NL', values: 'Afghanistan'}, 
        {name: 'Netherlands Antilles', code: 'AN', values: 'Afghanistan'}, 
        {name: 'New Caledonia', code: 'NC', values: 'Afghanistan'}, 
        {name: 'New Zealand', code: 'NZ', values: 'Afghanistan'}, 
        {name: 'Nicaragua', code: 'NI', values: 'Afghanistan'}, 
        {name: 'Niger', code: 'NE', values: 'Afghanistan'}, 
        {name: 'Nigeria', code: 'NG', values: 'Afghanistan'}, 
        {name: 'Niue', code: 'NU', values: 'Afghanistan'}, 
        {name: 'Norfolk Island', code: 'NF', values: 'Afghanistan'}, 
        {name: 'Northern Mariana Islands', code: 'MP', values: 'Afghanistan'}, 
        {name: 'Norway', code: 'NO', values: 'Afghanistan'}, 
        {name: 'Oman', code: 'OM', values: 'Afghanistan'}, 
        {name: 'Pakistan', code: 'PK', values: 'Afghanistan'}, 
        {name: 'Palau', code: 'PW', values: 'Afghanistan'}, 
        {name: 'Palestinian Territory, Occupied', code: 'PS', values: 'Afghanistan'}, 
        {name: 'Panama', code: 'PA', values: 'Afghanistan'}, 
        {name: 'Papua New Guinea', code: 'PG', values: 'Afghanistan'}, 
        {name: 'Paraguay', code: 'PY', values: 'Afghanistan'}, 
        {name: 'Peru', code: 'PE', values: 'Afghanistan'}, 
        {name: 'Philippines', code: 'PH', values: 'Afghanistan'}, 
        {name: 'Pitcairn', code: 'PN', values: 'Afghanistan'}, 
        {name: 'Poland', code: 'PL', values: 'Afghanistan'}, 
        {name: 'Portugal', code: 'PT', values: 'Afghanistan'}, 
        {name: 'Puerto Rico', code: 'PR', values: 'Afghanistan'}, 
        {name: 'Qatar', code: 'QA', values: 'Afghanistan'}, 
        {name: 'Reunion', code: 'RE', values: 'Afghanistan'}, 
        {name: 'Romania', code: 'RO', values: 'Afghanistan'}, 
        {name: 'Russian Federation', code: 'RU', values: 'Afghanistan'}, 
        {name: 'RWANDA', code: 'RW', values: 'Afghanistan'}, 
        {name: 'Saint Helena', code: 'SH', values: 'Afghanistan'}, 
        {name: 'Saint Kitts and Nevis', code: 'KN', values: 'Afghanistan'}, 
        {name: 'Saint Lucia', code: 'LC', values: 'Afghanistan'}, 
        {name: 'Saint Pierre and Miquelon', code: 'PM', values: 'Afghanistan'}, 
        {name: 'Saint Vincent and the Grenadines', code: 'VC', values: 'Afghanistan'}, 
        {name: 'Samoa', code: 'WS', values: 'Afghanistan'}, 
        {name: 'San Marino', code: 'SM', values: 'Afghanistan'}, 
        {name: 'Sao Tome and Principe', code: 'ST', values: 'Afghanistan'}, 
        {name: 'Saudi Arabia', code: 'SA', values: 'Afghanistan'}, 
        {name: 'Senegal', code: 'SN', values: 'Afghanistan'}, 
        {name: 'Serbia and Montenegro', code: 'CS', values: 'Afghanistan'}, 
        {name: 'Seychelles', code: 'SC', values: 'Afghanistan'}, 
        {name: 'Sierra Leone', code: 'SL', values: 'Afghanistan'}, 
        {name: 'Singapore', code: 'SG', values: 'Afghanistan'}, 
        {name: 'Slovakia', code: 'SK', values: 'Afghanistan'}, 
        {name: 'Slovenia', code: 'SI', values: 'Afghanistan'}, 
        {name: 'Solomon Islands', code: 'SB', values: 'Afghanistan'}, 
        {name: 'Somalia', code: 'SO', values: 'Afghanistan'}, 
        {name: 'South Africa', code: 'ZA', values: 'Afghanistan'}, 
        {name: 'South Georgia and the South Sandwich Islands', code: 'GS', values: 'Afghanistan'}, 
        {name: 'Spain', code: 'ES', values: 'Afghanistan'}, 
        {name: 'Sri Lanka', code: 'LK', values: 'Afghanistan'}, 
        {name: 'Sudan', code: 'SD', values: 'Afghanistan'}, 
        {name: 'Suriname', code: 'SR', values: 'Afghanistan'}, 
        {name: 'Svalbard and Jan Mayen', code: 'SJ', values: 'Afghanistan'}, 
        {name: 'Swaziland', code: 'SZ', values: 'Afghanistan'}, 
        {name: 'Sweden', code: 'SE', values: 'Afghanistan'}, 
        {name: 'Switzerland', code: 'CH', values: 'Afghanistan'}, 
        {name: 'Syrian Arab Republic', code: 'SY', values: 'Afghanistan'}, 
        {name: 'Taiwan, Province of China', code: 'TW', values: 'Afghanistan'}, 
        {name: 'Tajikistan', code: 'TJ', values: 'Afghanistan'}, 
        {name: 'Tanzania, United Republic of', code: 'TZ', values: 'Afghanistan'}, 
        {name: 'Thailand', code: 'TH', values: 'Afghanistan'}, 
        {name: 'Timor-Leste', code: 'TL', values: 'Afghanistan'}, 
        {name: 'Togo', code: 'TG', values: 'Afghanistan'}, 
        {name: 'Tokelau', code: 'TK', values: 'Afghanistan'}, 
        {name: 'Tonga', code: 'TO', values: 'Afghanistan'}, 
        {name: 'Trinidad and Tobago', code: 'TT', values: 'Afghanistan'}, 
        {name: 'Tunisia', code: 'TN', values: 'Afghanistan'}, 
        {name: 'Turkey', code: 'TR', values: 'Afghanistan'}, 
        {name: 'Turkmenistan', code: 'TM', values: 'Afghanistan'}, 
        {name: 'Turks and Caicos Islands', code: 'TC', values: 'Afghanistan'}, 
        {name: 'Tuvalu', code: 'TV', values: 'Afghanistan'}, 
        {name: 'Uganda', code: 'UG', values: 'Afghanistan'}, 
        {name: 'Ukraine', code: 'UA', values: 'Afghanistan'}, 
        {name: 'United Arab Emirates', code: 'AE', values: 'Afghanistan'}, 
        {name: 'United Kingdom', code: 'GB', values: 'Afghanistan'}, 
        {name: 'United States', code: 'US', values: 'Afghanistan'}, 
        {name: 'United States Minor Outlying Islands', code: 'UM', values: 'Afghanistan'}, 
        {name: 'Uruguay', code: 'UY', values: 'Afghanistan'}, 
        {name: 'Uzbekistan', code: 'UZ', values: 'Afghanistan'}, 
        {name: 'Vanuatu', code: 'VU', values: 'Vanuatu'}, 
        {name: 'Venezuela', code: 'VE', values: 'Venezuela'}, 
        {name: 'Viet Nam', code: 'VN', values: 'Viet Nam'}, 
        {name: 'Virgin Islands, British', code: 'VG', values: 'Virgin Islands, British'}, 
        {name: 'Virgin Islands, U.S.', code: 'VI', values: 'Virgin Islands, U.S.'}, 
        {name: 'Wallis and Futuna', code: 'WF', values: 'Wallis and Futuna'}, 
        {name: 'Western Sahara', code: 'EH', values: 'Western Sahara'}, 
        {name: 'Yemen', code: 'YE', values: 'Yemen'}, 
        {name: 'Zambia', code: 'ZM', values: 'Zambia'}, 
        {name: 'Zimbabwe', code: 'ZW', values: 'Zimbabwe'} 
      ]

    res.status(200).json(countriesData)
  }
  