const categories = [
    {
        category: 'Ancient Civilizations',
        clues: [
            { question: 'This city was founded in 750 B.C. by two brothers, Remus and Romulus.', choices: ['Athens', 'Madrird', 'Berlin', 'Rome'], answer: 'Rome' },
            { question: 'Located in Mexico, this civilization made a calendar that ended in 2012.', choices: ['Incan', 'Roman', 'Mayan', 'Egyptian'], answer: 'Mayan' },
            { question: 'This civilization invented the first writing system.', choices: ['Greek', 'Sumerian', 'Roman', 'Egyptian'], answer: 'Sumerian' },
            { question: 'Democracy comes from this civilization.', choices: ['Greek', 'Gaul', 'Aztec', 'Babylonian'], answer: 'Greek' },
            { question: 'This civilization is known for making the first code of laws.', choices: ['Persian', 'Celtic', 'Babylonian', 'Hun'], answer: 'Babylonian' },
            { question: 'This civilization in Mexico had its capital in Tenochtitlan, modern-day Mexico City.', choices: ['Aztec', 'Iroquois', 'Mayan', 'Incan'], answer: 'Aztec' },
            { question: 'The hieroglyphic writing system comes from this ancient civilization.', choices: ['Egyptian', 'Sumerian', 'Babyolonian', 'Roman'], answer: 'Egyptian' },
            { question: 'The island of Crete was home to this civilzation during the Bronze Age, before the Greeks.', choices: ['Minoan', 'Mycenaean', 'Persian', 'Egyptian'], answer: 'Minoan' },
            { question: 'This civilization occupied Italy until it was conquered by the Romans in the late 4th century BC.', choices: ['Gauls', 'Goth', 'Etruscan', 'Franks'], answer: 'Etruscan' },
            { question: 'This empire fell to the Spanish in 1572. Its capital was Cusco, Peru.', choices: ['Incan', 'Aztec', 'Mayan', 'Olmecs'], answer: 'Incan' }
        ]
    },
    {
        category: 'U.S. History',
        clues: [
            { question: 'He was the first U.S. president.', choices: ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison'], answer: 'George Washington' },
            { question: 'This president freed the slaves in 1865.', choices: ['Zachary Taylor', 'Abraham Lincoln', 'Andrew Jackson', 'Andrew Johnson'], answer: 'Abraham Lincoln' },
            { question: 'This president was in a wheelchair due to polio.', choices: ['Theodore Rooesevelt', 'Woodrow Wilson', 'Warren G Harding', 'Franklin Roosevelt'], answer: 'Franklin Roosevelt' },
            { question: 'This territory was bought from Russia in 1867.', choices: ['California', 'Washington', 'Alaska', 'Oregon'], answer: 'Alaska' },
            { question: 'This city was the first capital of the U.S.', choices: ['Boston', 'New York', 'Philadelphia', 'Washington D.C.'], answer: 'Philadelphia' },
            { question: 'This settlement, founded in 1610, was the first successful colony in the New World.', choices: ['Jamestown', 'Plymouth', 'Boston', 'Charleston'], answer: 'Jamestown' },
            { question: 'This 1776 document was the start of the American Revolution.', choices: ['The Constitution', 'The Declaration Of Independence', 'The Articles Of Confederation', 'The Bill Of Rights'], answer: 'The Declaration Of Independence' },
            { question: 'The issue of slavery divided the nation and started this war from 1861 to 1865.', choices: ['The Mexican-American War', 'The Civil War', 'The Revolutionary War', 'The French And Indian War'], answer: 'The Civil War' },
            { question: 'The purchase of this territory form the French in 1803 doubled the size of the U.S.', choices: ['Louisiana', 'Missouri', 'Michigan', 'Illinois'], answer: 'Louisiana' },
            { question: 'This state gained its independence from Mexico in 1836, but didn\'t become a state until 1845.', choices: ['New Mexico', 'Texas', 'Arizona', 'California'], answer: 'Texas' }
        ]
    },
    {
        category: 'The Solar System',
        clues: [
            { question: 'This planet is the closest to the sun.', choices: ['Earth', 'Venus', 'Mercury', 'Mars'], answer: 'Mercury' },
            { question: 'This planet has a big red spot that is a storm.', choices: ['Jupiter', 'Saturn', 'Neptune', 'Venus'], answer: 'Jupiter' },
            { question: 'This planet is red due to iron oxide.', choices: ['Venus', 'Mars', 'Neptune', 'Saturn'], answer: 'Mars' },
            { question: 'This planet spins backward compared to the other planets.', choices: ['Uranus', 'Mercury', 'Mars', 'Venus'], answer: 'Venus' },
            { question: 'This planet has the most water in the solar system.', choices: ['Mercury', 'Venus', 'Earth', 'Mars'], answer: 'Earth' },
            { question: 'This planet has the highest number of moons: 145.', choices: ['Jupiter', 'Mars', 'Saturn', 'Uranus'], answer: 'Saturn' },
            { question: 'Comets revolve in an elliptical orbit around this body.', choices: ['The sun', 'The Earth', 'The moon', 'Jupiter'], answer: 'The sun' },
            { question: 'This lies between Mars and Jupiter.', choices: ['The asteroit belt', 'The Kupier belt', 'The Oort cloud', 'Pluto'], answer: 'The asteroid belt' },
            { question: 'The sun is fueled by nuclear fusion combining hydrogen into this element.', choices: ['Oxygen', 'Helium', 'Nitrogen', 'Carbon'], answer: 'Helium' },
            { question: 'Earth\'s ocean tides are caused by this astronomical body.', choices: ['The sun', 'Mars', 'The moon', 'Saturn'], answer: 'The moon' }
        ]
    },
    {
        category: 'Geography',
        clues: [
            { question: 'This country has 11 time zones.', choices: ['United States', 'China', 'Russia', 'Brazil'], answer: 'Russia' },
            { question: 'This country has a canal that connects the Atlantic and Pacific oceans.', choices: ['Panama', 'Mexico', 'Costa Rica', 'Honduras'], answer: 'Panama' },
            { question: 'This southeast asian country is made up of over 17,000 islands', choices: ['Indonesia', 'Philipines', 'Taiwan', 'Malaysia'], answer: 'Indonesia' },
            { question: 'This country is completely situated between Russia and China.', choices: ['Kazakhstan', 'North Korea', 'Kyrgyztan', 'Mongolia'], answer: 'Mongolia' },
            { question: 'This African river is the longest in the world.', choices: ['The Nile', 'The Amazon', 'The Danube', 'The Ganges'], answer: 'The Nile' },
            { question: 'What is the capital of France?', choices: ['Rome', 'London', 'Berlin', 'Paris'], answer: 'Paris' },
            { question: 'Addis Ababa is the capital of this African country.', choices: ['Somolia', 'Ethiopia', 'Egypt', 'Kenya'], answer: 'Ethiopia' },
            { question: 'Reykjavik is the capital of this country.', choices: ['Iceland', 'Lithuania', 'Romania', 'Czech Republic'], answer: 'Iceland' },
            { question: 'This southeast asian country used to be called Burma.', choices: ['Vietnam', 'Myanmar', 'Thailand', 'Cambodia'], answer: 'Myanmar' },
            { question: 'This country near India used to be called Ceylon.', choices: ['Nepal', 'Bangladesh', 'Pakistan', 'Sri Lanka'], answer: 'Sri Lanka' }
        ]
    },
    {
        category: 'Pop Culture',
        clues: [
            { question: 'She sang Party In The U.S.A.', choices: ['Miley Cyrus', 'Lady Gaga', 'Taylor Swift', 'Katy Perry'], answer: 'Miley Cyrus' },
            { question: 'Leonardo DiCaprio and Kate Winslet starred in this movie.', choices: ['The Holiday', 'Titanic', 'Heavenly Creatures', 'The Departed'], answer: 'Titanic' },
            { question: 'Robert Downey Jr played this Marvel superhero.', choices: ['Thor', 'Captain American', 'The Hulk', 'Iron Man'], answer: 'Iron Man' },
            { question: 'Matt Damon played this spy.', choices: ['Jason Bourne', 'James Bond', 'Ethan Hunt', 'Xander Cage'], answer: 'Jason Bourne' },
            { question: 'John Krasinski played this action hero.', choices: ['John McClane', 'Martin Riggs', 'Jack Ryan', 'John Rambo'], answer: 'Jack Ryan' },
            { question: 'Real name Stefani Germanotta, she sang Bad Romance.', choices: ['Lady Gaga', 'Cardi B', 'Pink', 'Nicki Minaj'], answer: 'Lady Gaga' },
            { question: 'Before defeating aliens, he was the Fresh Prince.', choices: ['Will Smith', 'Jaleel White', 'Malcom-Jamal Warner', 'Mark Curry'], answer: 'Will Smith' },
            { question: 'She was supposed to play Blanche, but instead got the part of Rose in The Golden Girls.', choices: ['Estelle Getty', 'Rue McClanahan', 'Betty White', 'Beatrice Arthur'], answer: 'Betty White' },
            { question: 'This sitcom featured a father and son running a junk business.', choices: ['Sanford And Son', 'Frasier', 'The Andy Griffith Show' , 'Leave It To Beaver'], answer: 'Sanford And Son' },
            { question: 'This actor did the voice of both Darth Vader and The Lion King\'s Mufasa', choices: ['Morgan Freeman', 'James Earl Jones', 'Orson Wells', 'Burt Reynolds'], answer: 'James Earl Jones' }
        ]
    },
    {
        category: 'Art',
        clues: [
            { question: 'In 1498 this scientist, engineer, architecht, and artist painted the last supper of Jesus.', choices: ['Leonardo Da Vinci', 'Claude Monet', 'Rembrandt', 'Pablo Picasso'], answer: 'Leonardo Da Vinci' },
            { question: 'Starting in 1508 it took this Italian artist 4 years to paint the Sistine Chapel.', choices: ['Donatello', 'Raphael', 'Michelangelo', 'Leonardo'], answer: 'Michelangelo' },
            { question: 'This Dutch artist painted the Starry Night in 1889.', choices: ['Vincent van Gogh', 'Gustav Klimt', 'Pierre-Auguste Renoir', 'Francisco Goya'], answer: 'Vincent van Gogh' },
            { question: 'The Thinker was sculpted by this man.', choices: ['Auguste Rodin', 'Donatello', 'Pierre-Auguste Renoir', 'Raphael'], answer: 'Auguste Rodin' },
            { question: 'He painted the Nymphéas, also known as the Water Lillies.', choices: ['René MAgritte', 'Edgar Degas', 'Francisco Goya', 'Claude Monet'], answer: 'Claude Monet' },
            { question: 'This Dutch artist painted The Night Watch in 1642.', choices: ['Albrecht Dürer', 'Michelangelo Buonarotti', 'Rembrandt', 'Jackson Pollock'], answer: 'Rembrandt' },
            { question: 'This Spanish artist painted Shirley Temple as a sphinx in 1939.', choices: ['Pablo Picasso', 'Diego Velázquez', 'Salvador Dali', 'Francisco Goya'], answer: 'Salvador Dali' },
            { question: 'This French Impressionist artist painted many dances, including The Ballet Class in 1874.', choices: ['Édouard Manet', 'Edgar Degas', 'Georges Seurat', 'Paul Cézanne'], answer: 'Edgar Degas' },
            { question: 'In 1804, he sculpted a statue of Perseus holding the head of the Medusa.', choices: ['Antonio Canova', 'Eugène Delacroix', 'Johannes Vermeer', 'Vincent van Gogh'], answer: 'Antonio Canova' },
            { question: 'This Spanish Artist painted Child With A Dove in 1901.', choices: ['Claude Monet', 'Diego Velázquez', 'Pablo Picasso', 'Edgar Degas'], answer: 'Pablo Picasso' }
        ]
    },
    {
        category: 'Literature',
        clues: [
            { question: 'He wrote "A Christmas Carol" in 1843.', choices: ['Sir Arthur Conan Doyle', 'Charles Dickens', 'Edgar Allen Poe', 'Ernest Hemingway'], answer: 'Charles Dickens' },
            { question: 'He wrote "War And Peace" in 1867.', choices: ['Leo Tolstoy', 'Herman Melville', 'C.S. Lewis', 'Hans Christian Andersen'], answer: 'Leo Tolstoy' },
            { question: 'He wrote "Les Misérables" in 1862.', choices: ['T.S. Elliot', 'Oscar Wilde', 'John Steinbeck', 'Victor Hugo'], answer: 'Victor Hugo' },
            { question: 'He worte "From The Earth To The Moon" in 1865.', choices: ['Jules Verne', 'Edgar Allan Poe', 'Victor Hugo', 'Fyodor Dostoevsky'], answer: 'Jules Verne' },
            { question: 'She wrote "Pride And Predjudice" in 1813.', choices: ['Jane Austen', 'Charlotte Brontë', 'Louisa May Alcott', 'Emily Dickinson'], answer: 'Jane Austen' },
            { question: 'Sir James Barrie wrote this children\'s tale of a boy who doesn\'t want to grow up.', choices: ['Lord Of The Flies', 'Peter Pan', 'Treasure Island', 'Adventures Of Huckleberry Finn'], answer: 'Peter Pan' },
            { question: 'Lewis Carrol wrote this story of a girl who falls through a rabbit hole.', choices: ['Matilda', 'The Secret Garden', 'Alice\'s Adventures In Wonderland', 'Pippi Longstocking'], answer: 'Alice\'s Adventures In Wonderland' },
            { question: 'Rudyard Kipling wrote this story about a boy who grows up in the jungle.', choices: ['Lord Of The Flies', 'The Jungle Book', 'A Tale Of Two Cities', 'The Great Gatsby'],  answer: 'The Jungle Book' },
            { question: 'Louisa May Alcott wrote this novel in 1868 about 4 sisters growing up.', choices: ['Sense And Sensibility', 'The Secret Garden', 'Little Women', 'In The Time Of The Butterflies'], answer: 'Little Women' },
            { question: 'Samuel Clemens is the real name of this Tom Sawyer author.', choices: ['Mark Twain', 'Charles Lutwidge Dodgson', 'John Dickson Carr', 'Washington Irving'], answer: 'Mark Twain' }
        ]
    },
    {
        category: 'Chemistry',
        clues: [
            { question: 'Two atoms of oxygen and one atom of hydrogen make this molecule.', choices: ['Amonia', 'Nitric oxide', 'Water', 'Salt'], answer: 'Water' },
            { question: 'One atom of carbon and two atoms of oxygen make this molecule.', choices: ['Sodium chloride', 'Carbon dioxide', 'Hydrochloric acid', 'Sulphuric acid'], answer: 'Carbon dioxide' },
            { question: 'Protons and neutrons make up the nucleus, while these orbit the nucleus.', choices: ['Quarks', 'Neutrinos', 'Photons', 'Electrons'], answer: 'Electrons' },
            { question: 'An atom that can have a varying number of neutrons is called this.', choices: ['Isotope', 'Muon', 'Neutrino', 'Gluon'], answer: 'Isotope' },
            { question: 'An atom with a different number of protons than electrons is called this.', choices: ['Neutrino', 'Ion', 'Quark', 'Molecule'], answer: 'Ion' },
            { question: 'This explosive element was used in blimps. Now helium is used.', choices: ['Hydrogen', 'Helium', 'Neon', 'Argon'], answer: 'Hydrogen' },
            { question: 'Potassium nitrate is a component of this explosive substance used in guns.', choices: ['Acetylene', 'Nitroglycerine', 'Nitromethane', 'Gunpowder'], answer: 'Gunpowder' },
            { question: 'Copper and tin are combined to make this historically significant alloy.', choices: ['Bronze', 'Brass', 'Cast iron', 'Steel'], answer: 'Bronze' },
            { question: 'This element is used in making computer chips.', choices: ['Boron', 'Lithium', 'Silicon', 'Iodine'], answer: 'Silicon' },
            { question: 'This toxic metal is a liquid at room temperature.', choices: ['Iron', 'Mercury', 'Aluminum', 'Magnesium'], answer: 'Mercury' }
        ]
    },
    {
        category: 'Harry Potter',
        clues: [
            { question: 'Harry\'s parents were murdered by this dark wizard.', choices: ['Severus Snape', 'Voldemort', 'Lucius Malfoy', 'Peter Pettigrew'], answer: 'Voldemort' },
            { question: 'The train for Hogwarts departs from this platform number.', choices: ['3', '7', '5 and 4/5', '9 and 3/4'], answer: '9 and 3/4' },
            { question: 'This potion will allow you to transform into someone else.', choices: ['Polyjuice potion', 'Felix Felicis', 'Veritaserum', 'Wiggenweld Potion'], answer: 'Polyjuice potion' },
            { question: 'This boy at school is Harry\'s rival.', choices: ['Cedric Diggory', 'Dudley Dursley', 'Oliver Wood', 'Draco Malfoy'], answer: 'Draco Malfoy' },
            { question: 'Harry, along with the other students, gets his wand from this store.', choices: ['Olivander\'s', 'Gringotts', 'The Three Broomsticks', 'Borgin and Burkes'], answer: 'Olivander\'s' },
            { question: 'The elder wand, the resurrection stone, and the invisibility cloak are referred to as these.', choices: ['The deathly hallows', 'The horcruxes', 'The vanishing cabinets', 'Portkeys'], answer: 'The deathly hallows' },
            { question: 'He is the gamekeeper for Hogwarts', choices: ['Albus Dumbledore', 'Severus Snape', 'Rubeus Hagrid', 'Argus Filch'], answer: 'Rubeus Hagrid' },
            { question: 'The Chamber Of Secrets was the home of this beast.', choices: ['The basilisk', 'Fluffy', 'The Hungarian horntail', 'The hippogriff'], answer: 'The basilisk' },
            { question: 'This man was Harry\'s godfather, as well as his father\'s close friend.', choices: ['Peter Pettigrew', 'Sirius Black', 'Frank Longbottom', 'Vernon Dursley'], answer: 'Sirius Black' },
            { question: 'The dementors are the guardians for this prison.', choices: ['Knockturn Alley', 'The Leaky Cauldron', 'Azkaban', 'Hogwarts'], answer: 'Azkaban' }
        ]
    }
    // {
    //     category: 'Hungarian History',
    //     clues: [
    //         { question: 'This empire occupied Hungary from 1541 to 1699.', answer: ['Ottoman', 'The Ottoman', 'Ottoman Empire', 'The Ottoman Empire', 'Turkish', 'The Turkish', 'Turkish Empire', 'The Turkish Empire', 'The Turks' ] },
    //         { question: 'This king who ruled for 3 years, was litterally killed by his throne in 1063.', answer: ['Bela I', 'Bela the first', 'Béla I', 'Béla the first'] },
    //         { question: 'In 1241, Hungary was devastated by this empire.', answer: ['Mongol', 'Mongolian', 'The Mongol', 'The Mongolian', 'The Mongols'] },
    //         { question: 'He established the first printing press in 1472 in Buda.', answer: ['Andras Hess', 'András Hess'] },
    //         { question: 'In 1521, this fortress in present-day Belgrade fell to the Ottoman Turks.', answer: ['Nandorfehervar', 'Nándorfehérvár'] }
    //     ]
    // }
];