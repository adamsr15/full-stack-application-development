/**
 * A local database of sorts from which the content will be built.
 *
 * @author Robert Adams
 */
const animals = [
	{
		"animalName"            :   "Benny",
		"animalImages"          :   [ 'https://via.placeholder.com/1500x750', 'https://via.placeholder.com/1500x750', 'https://via.placeholder.com/1500x750' ],
		"type"                  :   "Dog",
		"breed"                 :   "Australian Shepherd Cross",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Brown / White",
		"declawed"              :   null,
		"spayedOrNeutered"      :   true,
		"age"                   :   "2Yrs 1Mths 4Wks (approx)",
		"size"                  :   "Large",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23531",
		"microchipNumber"       :   "985113005872810",
		"isSuitableWithChildren":   false,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Cornelia",
		"animalImages"          :   [ 'https://via.placeholder.com/1500x750', 'https://via.placeholder.com/1500x750' ],
		"type"                  :   "Dog",
		"breed"                 :   "Boxer Cross",
		"secondBreed"           :   "",
		"sex"                   :   "Female",
		"color"                 :   "White",
		"declawed"              :   null,
		"spayedOrNeutered"      :   true,
		"age"                   :   "6Yrs 2Mths 3Wks (approx)",
		"size"                  :   "Large",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23390",
		"microchipNumber"       :   "985113005872687",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   true,
		"isLaidBack"            :   true,
		"isShy"                 :   true,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [
			"Cornelia is calm and quiet in their kennel. She needs a home willing to use positive reinforcement training to build their confidence. Cornelia is shy on first meeting but if you give her time they warm up quickly. She would so best in a calm quiet home due to their personality and demeanor.",
			"Cornelia seems to do well with other dogs and would love a buddy ti play with in their new home. We would suggest laid back, calm dogs in their new home. They are so low maintenance and calm, a hyper, playful dog might stress them out.",
			"We would suggest other dogs and/or children meet them prior to being adopted because we want to make sure they do not overwhelm him. In time with TLC, patience, and confidence building they will fit perfectly into their forever family."
		],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Hemingway",
		"animalImages"          :   [ 'https://via.placeholder.com/1500x750','https://via.placeholder.com/1500x750','https://via.placeholder.com/1500x750','https://via.placeholder.com/1500x750' ],
		"type"                  :   "Cat",
		"breed"                 :   "Domestic Short Hair Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Grey",
		"declawed"              :   false,
		"spayedOrNeutered"      :   true,
		"age"                   :   "3Yrs 3Wks (approx)",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   null,
		"animalID"              :   "23897",
		"microchipNumber"       :   null,
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   false,
		"isSpecialNeeds"        :   true,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Howard",
		"animalImages"          :   [ 'https://via.placeholder.com/1500x750','https://via.placeholder.com/1500x750','https://via.placeholder.com/1500x750' ],
		"type"                  :   "Cat",
		"breed"                 :   "Domestic Short Hair Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "Russian",
		"sex"                   :   "Male",
		"color"                 :   "Grey",
		"declawed"              :   false,
		"spayedOrNeutered"      :   true,
		"age"                   :   "Adult",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23882",
		"microchipNumber"       :   "985113006299853",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Niko",
		"animalImages"          :   [  ],
		"type"                  :   "Kitten",
		"breed"                 :   "Domestic Longhair Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Grey Tabby / White",
		"declawed"              :   false,
		"spayedOrNeutered"      :   true,
		"age"                   :   "3Mths 3Wks",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23541",
		"microchipNumber"       :   "985113006299812",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   true,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Wishbone",
		"animalImages"          :   [ 'https://via.placeholder.com/1500x750' ],
		"type"                  :   "Dog",
		"breed"                 :   "American Bulldog Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Black",
		"declawed"              :   null,
		"spayedOrNeutered"      :   true,
		"age"                   :   "2Yrs 1Mths 4Wks (approx)",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "20579",
		"microchipNumber"       :   "985113004709947",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [
			"Wishbone is a super sweet playful guy! He is around a 2 years old, but is still very much a puppy. He loves people and he, like any youngster, will need basic manner training and a patient home willing to put their time and energy into him. Wishbone also seems to play well with other dogs! His perfect doggy pal would be one that can keep up yet be tolerant of his playful antics. He would benefit from a home willing to exhaust his energy and keep him active . Wishbone might jump on you or play mouth because he is young and still learning. Wishbone will require a home with children 13 years and older because he gets so playful and excited he doesn't realize his size and strength. He truly is a smart young man just needs the right home to spoil him rotton! My past owner went through the process of getting me a registered as an Emotional Support Animal as well! And I have the Certificate to prove it!"
		],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	}
];