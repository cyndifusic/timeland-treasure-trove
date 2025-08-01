var list = document.getElementById("list");
var genreList = document.getElementById("genres");
var sortButton = document.getElementById("sort");
var genres = ["All", "Jazz", "Metal", "Pop", "Punk", "Rock", "Other"];
var header = ["Artist", "Title", "Length", "Timer", "Genre", "Link"]

var collection = [
    ["A Giant Dog", "Chatterteeth", "2:47", "quantumvortex", "Garage Punk", ["Punk"], "a_Giant_Dog_-_Chatterteeth.osz"],
    ["A Giant Dog", "Sex & Drugs", "2:17", "quantumvortex", "Garage Punk", ["Punk"], "a_Giant_Dog_-_Sex__Drugs.osz"],
    ["Alice in Chains", "I Stay Away", "4:14", "a bat", "Grunge", ["Punk", "Rock"], "Alice in Chains - I Stay Away.osz"],
    ["Alice in Chains", "Rotten Apple", "6:58", "a bat", "Grunge", ["Punk", "Rock"], "Alice in Chains - Rotten Apple.osz"],
    ["All Them Witches", "Tour Death Song", "4:59", "a bat", "Acid Rock", ["Rock"], "All Them Witches - Tour Death Song.osz"],
    ["Amenra", "A Solitary Reign", "9:04", "Bonk", "Sludge Metal", ["Metal"], "Amenra - A Solitary Reign.osz"],
    ["American Football", "Stay Home", "8:11", "mineralwater1", "Midwest Emo", ["Rock"], "American Football - Stay Home.osz"],
    ["American Football", "The Summer Ends", "4:47", "mineralwater1", "Midwest Emo", ["Rock"], "American Football - The Summer Ends.osz"],
    ["And Also the Trees", "The Dust Sailor", "4:26", "Bonk", "Post-Punk", ["Punk"], "And Also the Trees - The Dust Sailor.osz"],
    ["Andreas Waldetoft, Paradox Interactive", "The Crusade Starts", "1:00", "turffff", "Video Game OST", ["Other"], "Andreas Waldetoft, Paradox Interactive - The Crusade Starts.osz"],
    ["Atsuko Chiba", "One Big Happy Family", "23:57", "a bat", "Progressive Rock", ["Rock"], "Atsuko Chiba - One Big Happy Family.osz"],
    ["Autechre", "AE_LYON_070524 (P void, r enc LT, newfree -)", "23:06", "Jimmy Rustler", "Glitch Hop", ["Other"], "Autechre - AE_LYON_070524 (P void, r enc LT, newfree -).osz"],
    ["Bang Camaro", "Pleasure (Pleasure)", "3:41", "a bat", "Glam Metal", ["Metal", "Rock"], "Bang Camaro - Pleasure (Pleasure).osz"],
    ["Bent Knee", "Land Animal", "5:13", "a bat", "Art Rock", ["Rock"], "Bent Knee - Land Animal.osz"],
    ["Black Country, New Road", "Concorde", "6:04", "quantumvortex", "Indie Rock", ["Rock"], "Black Country New Road - Concorde.osz"],
    ["Black Country, New Road", "Sunglasses", "9:50", "Boden", "Post-Punk", ["Punk"], "Black_Country_New_Road_-_Sunglasses.osz"],
    ["black midi", "Eat Men Eat", "3:08", "Boden", "Avant-Prog", ["Rock"], "black_midi_-_Eat_Men_Eat.osz"],
    ["black midi", "Hogwash and Balderdash", "2:33", "Fump", "Brutal Prog", ["Rock"], "black_midi_-_Hogwash_and_Balderdash.osz"],
    ["black midi", "The Defence", "3:00", "Fump", "Vocal Jazz", ["Jazz"], "black midi - The Defence.osz"],
    ["Blood Incantation", "Vitrification of Blood (Part 1)", "13:09", "Bonk", "Death Metal", ["Metal"], "Blood Incantation - Vitrification of Blood (Part I).osz"],
    ["Bobby Caldwell", "What You Won't Do for Love", "4:47", "quantumvortex", "Smooth Soul", ["Other"], "Bobby_Caldwell_-_What_You_Wont_Do_for_Love.osz"],
    ["Bomb the Music Industry!", "Planning My Death", "1:58", "Fump", "Ska Punk", ["Punk"], "Bomb the Music Industry! - Planning My Death.osz"],
    ["Boris", "Flood II", "13:34", "a bat", "Post-Rock", ["Rock"], "Boris - Flood II.osz"],
    ["Boris", "Pink", "4:19", "Bonk", "Noise Rock", ["Metal", "Rock"], "Boris - Pink.osz"],
    ["brian david gilbert", "Pumpkin Cowboy", "5:09", "quantumvortex", "Western", ["Other"], "brian_david_gilbert_-_Pumpkin_Cowboy.osz"],
    ["Built to Spill", "Sidewalk", "3:51", "Boden", "Indie Rock", ["Rock"], "Built to Spill - Sidewalk.osz"],
    ["Car Bomb", "The Seconds", "4:32", "Bonk", "Mathcore", ["Rock"], "Car Bomb - The Seconds.osz"],
    ["Cardiacs", "The Leader of the Starry Skies", "3:53", "a bat", "Progressive Rock", ["Rock"], "Cardiacs - The Leader of the Starry Skies.osz"],
    ["Catharsis", "i. Threshold (To Enter, the Heart Must Break) / ii. Duende (The Soil Is Closer Than The Sky)", "8:19", "Bonk", "Metalcore", ["Metal"], "Catharsis - i. Threshold ii. Duende.osz"],
    ["Cave In", "Big Riff", "6:54", "Bonk", "Post-Metal", ["Metal"], "Cave In - Big Riff.osz"],
    ["Cave In", "In The Stream of Commerce", "5:28", "Bonk", "Post-Hardcore", ["Punk"], "Cave In - In the Stream of Commerce.osz"],
    ["Cave In", "Sing My Loves", "8:18", "Bonk", "Sludge Metal", ["Metal"], "Cave In - Sing My Loves.osz"],
    ["Chat Pile", "Anywhere", "5:47", "a bat", "Sludge Metal", ["Metal"], "Chat Pile - Anywhere.osz"],
    ["City of Caterpillar", "A Little Change Could Go a Long Ways", "9:38", "Bonk", "Screamo", ["Rock", "Metal"], "City of Caterpillar - A Little Change Could Go a Long Ways.osz"],
    ["clipping.", "Story 7", "3:40", "Boden", "Glitch Hop", ["Other"], "clipping._-_Story_7.osz"],
    ["Clouds", "New Amnesia", "3:38", "Bonk", "Hard Rock", ["Rock"], "Clouds - New Amnesia.osz"],
    ["Craw", "Caught My Tell", "7:27", "Bonk", "Noise Rock", ["Rock"], "Craw - Caught My Tell.osz"],
    ["Crippled Black Phoenix", "The Invisible Past", "11:25", "a bat", "Progressive Rock", ["Rock"], "Crippled Black Phoenix - The Invisible Past.osz"],
    ["Dead Kennedys", "Dog Bite", "1:14", "Fump", "Hardcore Punk", ["Punk"], "Dead_Kennedys_-_Dog_Bite.osz"],
    ["Deftones", "Knife Prty", "4:49", "Bonk", "Alternative Metal", ["Metal"], "Deftones - Knife Prty.osz"],
    ["Dismemberment Plan", "Back and Forth", "5:07", "Boden", "Indie Rock", ["Rock"], "Dismemberment_Plan_-_Back_and_Forth.osz"],
    ["Duster", "Reed To Hillsborough", "4:01", "mineralwater1", "Slacker Rock", ["Rock"], "Duster - Reed To Hillsborough.osz"],
    ["Dvne", "Enuma Elis", "4:39", "a bat", "Sludge Metal", ["Metal"], "Dvne - Enuma Elis.osz"],
    ["Embrace", "Give Me Back", "2:30", "Bonk", "Emocore", ["Punk"], "Embrace - Give Me Back.osz"],
    ["Estradasphere", "Those Who Know...", "5:18", "a bat", "Experimental Rock", ["Rock"], "Estradasphere - Those Who Know....osz"],
    ["fail better heal faster", "Cyber Corrupt", "3:05", "quantumvortex", "Midwest Emo", ["Rock"], "fail_better_heal_faster_-_Cyber_Corrupt.osz"],
    ["fail better heal faster", "Human", "3:50", "quantumvortex", "Midwest Emo", ["Rock"], "fail_better_heal_faster_-_Human.osz"],
    ["Failure", "Wonderful Life", "5:34", "Bonk", "Space Rock", ["Rock"], "Failure - Wonderful Life.osz"],
    ["Frankie and the Witch Fingers", "Weird Dog", "3:58", "TVRemote", "Garage Rock", ["Rock"], "Frankie and the Witch Fingers - Weird Dog.osz"],
    ["Funeral Diner", "Syncope", "4:49", "Bonk", "Screamo", ["Punk"], "Funeral Diner - Syncope.osz"],
    ["Gasp", "Sky Flowers Through Horse Eggs", "2:36", "Bonk", "Noise Rock", ["Rock"], "Gasp - Sky Flowers Through Horse Eggs.osz"],
    ["Gehenna", "To Lay to Waste", "1:13", "Bonk", "Hardcore", ["Metal"], "Gehenna - To Lay to Waste.osz"],
    ["Geordie Greep", "Motorbike", "6:02", "Fump", "Avant-Prog", ["Rock"], "Geordie Greep - Motorbike.osz"],
    ["GilvaSunner", "Epic Flintstones", "3:08", "quantumvortex", "Mashup", ["Other"], "GiIvaSunner_-_Epic_Flintstones.osz"],
    ["glass beach", "commatose", "9:50", "dilf enjoyer", "Progressive Rock", ["Rock"], "glass beach - commatose.osz"],
    ["Glassing", "Nothing Touches You", "5:39", "Bonk", "Post-Metal", ["Metal"], "Glassing - Nothing Touches You.osz"],
    ["Golden Earring", "Vanilla Queen", "9:16", "a bat", "Progressive Rock", ["Rock"], "Golden Earring - Vanilla Queen.osz"],
    ["Gordon Lightfoot", "The Wreck of the Edmund Fitzgerald", "6:24", "Bonk", "Folk Rock", ["Rock"], "Gordon Lightfoot - The Wreck of the Edmund Fitzgerald.osz"],
    ["han@mori", "生命の環を紡いで", "2:19", "ChamomileTea", "Electronic", ["Other"], "han@mori - Seimei no wa wo tsumuide.osz"],
    ["Hangman's Chair", "The Saddest Call", "6:54", "Bonk", "Doom Metal", ["Metal"], "Hangman_s Chair - The Saddest Call.osz"],
    ["Imogen Heap", "Hide and Seek", "4:12", "Kataryn", "Art Pop", ["Pop"], "Imogen Heap - Hide and Seek.osz"],
    ["Isis", "Celestial (The Tower)", "9:42", "Bonk", "Sludge Metal", ["Metal"], "Isis - Celestial (The Tower).osz"],
    ["Isis", "Isis - Garden of Light.osz", "9:17", "Bonk", "Sludge Metal", ["Metal"], "Isis - Garden of Light.osz"],
    ["Isis", "The Beginning and the End", "8:01", "Bonk", "Sludge Metal", ["Metal"], "Isis - The Beginning and the End.osz"],
    ["Jeff Rosenstock", "Bang On The Door", "1:03", "Fump", "Pop Punk", ["Pop", "Punk"], "Jeff Rosenstock - Bang On The Door.osz"],
    ["Jeff Rosenstock", "FUTURE IS DUMB", "3:47", "Boden", "Pop Punk", ["Pop", "Punk"], "Jeff Rosenstock - FUTURE IS DUMB.osz"],
    ["Jeff Rosenstock", "HEAD", "1:30", "Boden", "Skate Punk", ["Punk"], "Jeff Rosenstock - HEAD.osz"],
    ["Jeff Rosenstock", "I WANNA BE WRONG", "2:34", "Boden", "Pop Punk", ["Pop", "Punk"], "Jeff_Rosenstock_-_I_WANNA_BE_WRONG.osz"],
    ["Jeff Rosenstock", "WIILL U STILL U", "3:20", "Boden", "Pop Punk", ["Pop", "Punk"], "Jeff_Rosenstock_-_WILL_U_STILL_U.osz"],
    ["John Larkin", "The Misfit", "5:53", "Boden", "Vocal Jazz", ["Jazz"], "John_Larkin_-_The_Misfit.osz"],
    ["JPEGMAFIA & Danny Brown", "Fentanyl Tester", "2:37", "Boden", "Experimental Hip-Hop", ["Other"], "JPEGMAFIA_Danny_Brown_-_Fentanyl_Tester.osz"],
    ["Junius", "Forcing Out the Silence", "6:43", "Bonk", "Post-Punk", ["Punk", "Rock"], "Junius - Forcing Out the Silence.osz"],
    ["Kara's Walk Home", "Dragon Bome Smasher", "3:47", "Fump", "Midwest Emo", ["Rock"], "Kara's Walk Home - Dragon Bone Smasher.osz"],
    ["Kara's Walk Home", "Highway", "9:37", "Fump", "Midwest Emo", ["Rock"], "Kara's Walk Home - Highway.osz"],
    ["Kendrick Lamar", "Kendrick Lamar's Apple Music Super Bowl Halftime Show", "13:21", "chidodou", "Hip-Hop", ["Other"], "Kendrick Lamar - Kendrick Lamar's Apple Music Super Bowl Halftime Show.osz"],
    ["Killing Joke", "Love Like Blood", "6:50", "Bonk", "Gothic Rock", ["Punk, Rock"], "Killing Joke - Love Like Blood.osz"],
    ["King Gizzard & The Lizard Wizard", "Automation", "3:31", "TVRemote", "Psychedelic Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Automation.osz"],
    ["King Gizzard & The Lizard Wizard", "Cellophane", "3:12", "Fump", "Psychedelic Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Cellophane.osz"],
    ["King Gizzard & The Lizard Wizard", "Evil Death Roll", "7:15", "TVRemote", "Psychedelic Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Evil Death Roll.osz"],
    ["King Gizzard & The Lizard Wizard", "Gliese 710", "7:49", "TVRemote", "Jazz-Rock", ["Jazz", "Rock"], "King Gizzard & The Lizard Wizard - Gliese 710.osz"],
    ["King Gizzard & The Lizard Wizard", "Her & I (Slow Jam II)", "8:15", "turffff", "Psychedelic Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Her & I (Slow Jam II).osz"],
    ["King Gizzard & The Lizard Wizard", "Lunch Meat", "1:41", "Fump", "Garage Punk", ["Punk"], "King_Gizzard__The_Lizard_Wizard_-_Lunch_Meat.osz"],
    ["King Gizzard & The Lizard Wizard", "Organ Farmer", "2:40", "Boden", "Thrash Metal", ["Metal"], "King Gizzard & The Lizard Wizard - Organ Farmer.osz"],
    ["King Gizzard & The Lizard Wizard", "The Book", "4:59", "Boden", "Psychedelic Rock", ["Rock"], "King_Gizzard__The_Lizard_Wizard_-_The_Book.osz"],
    ["King Gizzard & The Lizard Wizard", "Trapdoor", "2:39", "turffff & Boden", "Psychedelic Pop", ["Pop"], "King Gizzard & The Lizard Wizard - Trapdoor.osz"],
    ["King Gizzard & The Lizard Wizard", "Vegemite", "2:46", "Fump", "Psychedelic Pop", ["Pop"], "King_Gizzard__The_Lizard_Wizard_-_Vegemite.osz"],
    ["Last Days Of Humanity", "Wet Remains", "0:41", "Fump", "Goregrind", ["Other"], "Last Days Of Humanity - Wet Remains.osz"],
    ["LemKuuja", "What's a Future Funk", "4:30", "turffff", "Future Funk", ["Other"], "LemKuuja - Whats a Future Funk.osz"],
    ["Leningrad", "Den' vyborov", "1:45", "dopaminos", "Rock", ["Rock"], "Leningrad - Den_ vyborov.osz"],
    ["LINGUA IGNOTA", "SPITE ALONE HOLDS ME ALOFT", "7:25", "a bat", "Neoclassical Darkwave", ["Other"], "LINGUA IGNOTA - SPITE ALONE HOLDS ME ALOFT.osz"],
    ["Madame Germen", "Laboratorios ó servicio do mercado", "2:38", "Bonk", "Neocrust", ["Punk"], "Madame Germen - Laboratorios o servicio do mercado.osz"],
    ["Meat Wave", "Brother", "1:46", "quantumvortex", "Garage Punk", ["Punk"], "Meat_Wave_-_Brother.osz"],
    ["Messa", "Dark Horse", "7:28", "a bat", "Doom Metal", ["Metal"], "Messa - Dark Horse.osz"],
    ["MF DOOM", "One Beer", "4:18", "an3", "Hip-Hop", ["Other"], "MF DOOM - One Beer.osz"],
    ["Michael Giacchino", "It's Finn McMissile!", "5:55", "a bat", "Film Soundtrack", ["Other"], "Michael Giacchino - It_s Finn McMissile!.osz"],
    ["Modest Mouse", "Teeth Like God's Shoeshine", "6:53", "Boden", "Post-Hardcore", ["Rock"], "Modest Mouse - Teeth Like God's Shoeshine.osz"],
    ["Moon Tooth", "White Stag", "10:51", "a bat", "Post-Metal", ["Metal"], "Moon_Tooth_-_White_Stag.osz"],
    ["Mr. Bungle", "Pink Cigarette", "4:56", "a bat", "Art Rock", ["Rock"], "Mr._Bungle_-_Pink_Cigarette.osz"],
    ["Natural Snow Buildings", "Carnal Flowers", "6:05", "a bat", "Free Folk", ["Other"], "Natural Snow Buildings - Carnal Flowers.osz"],
    ["Neurosis", "To Crawl Under One's Skin", "7:51", "Bonk", "Sludge Metal", ["Metal"], "Neurosis - To Crawl Under One's Skin.osz"],
    ["Nirvana", "Dumb", "2:31", "a bat", "Alternative Rock", ["Rock"], "Nirvana - Dumb.osz"],
    ["NoMeansNo", "It's Catching Up", "3:29", "Boden", "Post-Hardcore", ["Punk"], "NoMeansNo_-_Its_Catching_Up.osz"],
    ["NoMeansNo", "Tired Of Waiting", "1:47", "Boden", "Post-Hardcore", ["Punk"], "NoMeansNo - Tired Of Waiting.osz"],
    ["NoMeansNo", "The Tower", "5:11", "Boden", "Post-Hardcore", ["Punk"], "NoMeansNo - The Tower.osz"],
    ["Norma Jean", "Memphis Will Be Laid to Waste", "4:57", "Bonk", "Metalcore", ["Metal"], "Norma Jean - Memphis Will Be Laid to Waste.osz"],
    ["Nuclear Assault", "Critical Mass", "3:20", "itzKira811", "Rock", ["Rock"], "Nuclear Assault - Critical Mass.osz"],
    ["Overmars", "Deux mesures de solitude", "5:07", "Bonk", "Post-Metal", ["Metal", "Rock"], "Overmars - Deux mesures de solitude.oszOvermars - Deux mesures de solitude.osz"],
    ["P.E.E.", "Fight Song (The)", "0:53", "Boden", "Math Rock", ["Rock"], "P.E.E. - Fight Song (The).osz"],
    ["P.E.E.", "Treed", "3:33", "Boden", "Math Rock", ["Rock"], "P.E.E. - Treed.osz"],
    ["Phineas And Ferb-Tones", "Glitchee Glitchee Goo! (Extended)", "1:59", "dopaminos", "Rock", ["Rock"], "q2jx2v.osz"],
    ["Pianos Become The Teeth", "Ripple Water Shine", "3:30", "quantumvortex", "Emo", ["Rock"], "Pianos_Become_The_Teeth_-_Ripple_Water_Shine.osz"],
    ["P-MODEL", "Sunshine City", "2:03", "an3", "New Wave", ["Pop"], "P-MODEL - Sunshine City.osz"],
    ["Quadeca", "RUIN MY LIFE", "4:42", "dilf enjoyer", "Art Pop", ["Pop"], "Quadeca - RUIN MY LIFE.osz"],
    ["Radiohead", "Black Star", "4:07", "startone", "Art Rock", ["Rock"], "Radiohead - Black Star.osz"],
    ["Radiohead", "Climbing Up The Walls", "4:46", "a bat", "Art Rock", ["Rock"], "Radiohead - Climbing Up The Walls.osz"],
    ["Radiohead", "Exit Music (For A Film)", "4:28", "turffff", "Art Rock", ["Rock"], "Radiohead - Exit Music (For A Film).osz"],
    ["Radiohead", "Lift", "4:06", "startone", "Art Rock", ["Rock"], "Radiohead - Lift.osz"],
    ["Radiohead", "(Nice Dream)", "3:53", "startone", "Art Rock", ["Rock"], "Radiohead - (Nice Dream).osz"],
    ["Radiohead", "Weird Fishes Arpeggi", "5:18", "turffff", "Art Rock", ["Rock"], "Radiohead - Weird Fishes Arpeggi.osz"],
    ["Ride", "Seagull", "6:07", "Boden", "Shoegaze", ["Rock"], "Ride_-_Seagull.osz"],
    ["Rosetta", "Absent", "9:45", "Bonk", "Sludge Metal", ["Metal"], "Rosetta - Absent.osz"],
    ["Rosetta", "Au pays natal", "13:32", "Bonk", "Sludge Metal", ["Metal"], "Rosetta - Au pays natal.osz"],
    ["Shelter", "In Praise of Others", "3:48", "Bonk", "Melodic Hardcore", ["Punk"], "Shelter - In Praise of Others.osz"],
    ["Shelter", "Metamorphosis", "3:34", "Bonk", "Melodic Hardcore", ["Punk"], "Shelter - Metamorphosis.osz"],
    ["Silver Knife", "Ecomimesis", "6:45", "Bonk", "Black Metal", ["Metal"], "Silver Knife - Ecomimesis.osz"],
    ["Skycamefalling", "The Elephant Graveyard", "5:15", "Post-Hardcore", ["Punk", "Metal"], "Skycamefalling - The Elephant Graveyard.osz"],
    ["Snooper", "Powerball", "1:03", "Boden", "Garage Punk", ["Punk"], "Snooper_-_Powerball.osz"],
    ["Split Lip", "Anthem Boy", "2:37", "Bonk", "Emocore", ["Punk"], "Split Lip - Anthem Boy.osz"],
    ["Sprain", "The Reclining Nude", "12:56", "a bat", "Post-Rock", ["Rock"], "Sprain - The Reclining Nude.osz"],
    ["Steven Wilson", "The Watchmaker", "11:42", "a bat", "Progressive Rock", ["Rock"], "Steven Wilson - The Watchmaker.osz"],
    ["Stevie Wonder", "I Wish", "4:12", "Kataryn", "Funk", ["Pop"], "Stevie Wonder - I Wish.osz"],
    ["Sum 41", "Walking Disaster", "4:46", "Shameimaru", "Rock", ["Rock"], "Sum 41 - Walking Disaster.osz"],
    ["SUMAC", "Attis' Blade", "15:45", "Bonk", "Sludge Metal", ["Metal"], "Sumac - Attis' Blade.osz"],
    ["SUMAC", "Image of Control", "9:57", "Bonk", "Sludge Metal", ["Metal"], "SUMAC - Image of Control.osz"],
    ["SUMAC", "Thorn in the Lion's Paw", "8:54", "Bonk", "Sludge Metal", ["Metal"], "Sumac - Thorn in the Lion's Paw.osz"],
    ["Swans", "Mind / Body / Light / Sound", "4:54", "Bonk", "Gothic Rock", ["Rock"], "Swans - Mind Body Light Sound.osz"],
    ["Swans", "Will We Survive", "5:59", "Bonk", "Gothic Rock", ["Rock"], "Swans - Will We Survive.osz"],
    ["Sweet Trip", "Where the Sunrise Dies, So Does the Echo of Your Voice", "5:34", "quantumvortex", "Dream Pop", ["Pop"], "Sweet_Trip_-_Where_the_Sunrise_Dies_So_Does_the_Echo_of_Your_Voice.osz"],
    ["Swing Kids", "El Camino Car Crash", "1:35", "a bat", "Screamo", ["Punk"], "Swing_Kids_-_El_Camino_Car_Crash.osz"],
    ["Starkweather", "Taming Leeches With Fire", "6:39", "Bonk", "Metalcore", ["Metal"], "Starkweather - Taming Leeches With Fire.osz"],
    ["Teen Cthulhu", "I'm Going to Fucking Kill Myself", "1:25", "Bonk", "Metalcore", ["Metal"], "Teen Cthulhu - I'm Going to Fucking Kill Myself.osz"],
    ["Teen Cthulhu", "The Aqueducts Will Run Red With the Blood of the Caesar", "1:52", "Bonk", "Metalcore", ["Metal"], "Teen Cthulhu - The Aqueducts Will Run Red With the Blood of the Caesar.osz"],
    ["The Appleseed Cast", "Kilgore Trout", "2:43", "Bonk", "Midwest Emo", ["Rock"], "The Appleseed Cast - Kilgore Trout.osz"],
    ["The Brave Little Abacus", "A highway got paved over my future, I drive it getting to school.", "2:34", "Fump", "Math Rock", ["Rock"], "The_Brave_Little_Abacus_-_A_highway_got_paved_over_my_future_I_drive_it_getting_to_school..osz"],
    ["The Brave Little Abacus", "A Map of the Stars", "3:52", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - a map of the stars.osz"],
    ["The Brave Little Abacus", "But I Won't Always Be on the Receiving End", "1:07", "dilf enjoyer", "Experimental Rock", ["Rock"], "The Brave Little Abacus - but I won_t always be on the recieving end!.osz"],
    ["The Brave Little Abacus", "Che Guevara Didn't Wear His Own T-Shirts", "5:20", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - Che Guevara didn_t wear his own t-shirts.osz"],
    ["The Brave Little Abacus", "El Capitano", "4:45", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - El Capitano.osz"],
    ["The Brave Little Abacus", "I See It Too.", "9:49", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - I see it too..osz"],
    ["The Brave Little Abacus", "Imaginary Peaks, Imaginary Beasts", "7:22", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - Imaginary Peaks, Imaginary Beasts.osz"],
    ["The Brave Little Abacus", "The Blah Blah Blahs", "4:12", "dilf enjoyer", "Post-Hardcore", ["Punk"], "The Brave Little Abacus - The Blah Blah Blahs.osz"],
    ["The Brave Little Abacus", "The Buffalo", "4:54", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - The Buffalo.osz"],
    ["The Brave Little Abacus", "Waiting For Your Return, Like Running Backwards", "1:01", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - waiting for your return, like running backwards.osz"],
    ["The Brave Little Abacus", "You're Not Me But Neither Am I", "4:21", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - You_re Not Me But Neither Am I.osz"],
    ["The Crazy World of Arthur Brown", "Fire", "2:55", "a bat", "Psychedelic Rock", ["Rock"], "The_Crazy_World_of_Arthur_Brown_-_Fire.osz"],
    ["The Drones", "Shark Fin Blues", "5:43", "a bat", "Punk Blues", ["Punk"], "The Drones - Shark Fin Blues.osz"],
    ["The Drones", "Why Write A Letter That You'll Never Send", "9:17", "a bat", "Art Rock", ["Rock"], "The Drones - Why Write A Letter That You_ll Never Send.osz"],
    ["The Flaming Lips", "The Spark That Bled", "5:54", "Boden", "Neo-Psychedelia", ["Rock"], "The Flaming Lips - The Spark That Bled.osz"],
    ["The God Machine", "In Bad Dreams", "3:05", "Bonk", "Alternative Rock", ["Rock"], "The God Machine - In Bad Dreams.osz"],
    ["The God Machine", "Out", "4:50", "Bonk", "Post-Metal", ["Metal"], "The God Machine - Out.osz"],
    ["Tool", "Forty Six & 2", "6:03", "turffff", "Alternative Metal", ["Metal"], "TOOL - Forty Six & 2.osz"],
    ["Totorro", "Home Alone", "1:35", "Boden", "Math Rock", ["Rock"], "Totorro - Home Alone.osz"],
    ["Tristan Tzara", "Anatomies", "1:21", "Fump", "Screamo", ["Punk"], "Tristan Tzara - Anatomies.osz"],
    ["Tropical Fuck Storm", "You Let My Tyres Down", "5:42", "a bat", "Punk Blues", ["Punk"], "Tropical_Fuck_Storm_-_You_Let_My_Tyres_Down.osz"],
    ["Uchu Nekoko", "Film", "2:22", "quantumvortex", "Ambient", ["Other"], "Uchu_Nekoko_-_Film.osz"],
    ["Uncurbed", "No Respect", "1:56", "Bonk", "Crust Punk", ["Punk"], "Uncurbed - No Respect.osz"],
    ["Underoath", "Giving Up Hurts the Most", "7:46", "Bonk", "Metalcore", ["Metal"], "Underoath - Giving Up Hurts the Most.osz"],
    ["Unknown Artist", "Jail Theme (LEGO Island)", "1:07", "dopaminos", "Video Game OST", ["Other"], "b795iu.osz"],
    ["Ween", "Stroker Ace", "2:09", "a bat", "Speed Metal", ["Metal"], "Ween_-_Stroker_Ace.osz"],
    ["what is your name?", "The Now Now and Never", "9:13", "Post-Rock", ["Rock"], "what is your name - The Now Now and Never.osz"],
    ["Wilco", "I am trying to break your heart", "6:58", "Boden", "Art Rock", ["Rock"], "Wilco_-_I_am_trying_to_break_your_heart.osz"],
    ["Wire", "The Commercial", "0:49", "Fump", "Punk Rock", ["Punk", "Rock"], "Wire - The Commercial.osz"],
    ["Worst Party Ever", "Provenance", "2:40", "quantumvortex", "Emo-Pop", ["Pop", "Rock"], "Worst_Party_Ever_-_Provenance.osz"],
    ["XTC", "Senses Working Overtime", "4:34", "dilf enjoyer", "Jangle Pop", ["Pop"], "XTC - Senses Working Overtime.osz"],
    ["Yakushimaru Etsuko", "Venus & Jesus", "3:10", "dopaminos", "J-Pop", ["Pop"], "Yakushimaru Etsuko - Venus & Jesus.osz"],
    ["Yes", "Close to the Edge", "18:40", "Boden", "Symphonic Prog", ["Rock"], "Yes - Close To The Edge.osz"],
    ["Zemfira", "bryzgi", "3:43", "itzKira811", "Indie Rock", ["Rock"], "i1qtqo.osz"],
    ["Zao", "Desire the End", "4:58", "Bonk", "Metalcore", ["Metal"], "Zao - Desire the End.osz"],
    ["Zao", "Savannah", "2:46", "Bonk", "Metalcore", ["Metal"], "Zao - Savannah.osz"],
    ["Zao", "The Ghost Psalm", "5:40", "Bonk", "Metalcore", ["Metal"], "Zao - The Ghost Psalm.osz"]
];

for (let i = 0; i < genres.length; i++) {
    let newItem = document.createElement("option");
    
    newItem.value = genres[i];
    newItem.innerHTML = genres[i];

    genreList.appendChild(newItem);
}

var clearTable = function() {
    let rows = [...list.getElementsByTagName("tr")];

    for (let i = 0; i < rows.length; i++) {
        list.removeChild(rows[i]);
    }
}

var createHeader = function() {
    let headerRow = document.createElement("tr");

    for (let i = 0; i < header.length; i++) {
        let newCell = document.createElement("td");
        newCell.innerHTML = header[i];
        newCell.id = header[i].toLowerCase();
        newCell.style.fontFamily = "Torus-Bold";
        newCell.style.backgroundColor = "#242424";
        headerRow.appendChild(newCell);
    }

    list.appendChild(headerRow);
}

var addAll = function() {
    clearTable();
    createHeader();

    for (let i = 0; i < collection.length; i++) {
        let newRow = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (j < 5) {
                let newCell = document.createElement("td");
                newCell.innerHTML = collection[i][j];
                newRow.appendChild(newCell);
            } else {
                if (j == 6) {
                    let newCell = document.createElement("td");
                    newCell.innerHTML = "<a href='./osz/" + collection[i][j] + "'>Download</a>";
                    newRow.appendChild(newCell);
                }
            }
        }

        list.appendChild(newRow);
    }
}

var addOnly = function(genre) {
    clearTable();
    createHeader();

    for (let i = 0; i < collection.length; i++) {
        if (collection[i][4].includes(genre)) {
            let newRow = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                if (j < 5) {
                    let newCell = document.createElement("td");
                    newCell.innerHTML = collection[i][j];
                    newRow.appendChild(newCell);
                } else {
                    if (j == 6) {
                        let newCell = document.createElement("td");
                        newCell.innerHTML = "<a href='./osz/" + collection[i][j] + "'>Download</a>";
                        newRow.appendChild(newCell);
                    }
                }
            }

            list.appendChild(newRow);
        }
    }
}

var determineAdd = function() {
    if (genreList.value == "All") {
        addAll();
    } else {
        addOnly(genreList.value);
    }
}

addAll();

sortButton.addEventListener("click", determineAdd);
