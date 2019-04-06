  // Get your shorts on - this is an array workout!
  // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955, avatar: "https://i.imgur.com/CRd6SMR.png"},
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727, avatar: "https://i.imgur.com/IZgCP8O.png"},
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642, avatar: "https://i.imgur.com/kMOyZCs.png"},
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934, avatar: "https://i.imgur.com/6ncxfRP.png"},
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630, avatar: "https://i.imgur.com/Os3X3eb.png"},
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543, avatar: "https://i.imgur.com/RnVKbG9.png"},
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947, avatar: "https://i.imgur.com/J1rqxs5.png"},
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979, avatar: "https://i.imgur.com/E7qTvz1.png"},
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852, avatar: "https://i.imgur.com/KUZgGYt.png"},
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905, avatar: "https://i.imgur.com/hRl8G2U.png"},
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968, avatar: "https://i.imgur.com/hRl8G2U.png"},
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909, avatar: "https://i.imgur.com/gmidpvl.jpg"},
      ];
  
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const findFifteen = () => (inventor) => {
        if (inventor.year >= 1500 && inventor.year < 1600) {
          return inventor;
        }
      }

      const filter = inventors.filter(findFifteen());

      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      const map = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      // This is one that I didn't remmeber how to do
      // To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array ascending (if it doesn't contain Infinity and NaN):
      // One thing that I forgot about this is that the method modifies the original array, amature mistake, so here is a new var.
      // Spread operator helped me avoid making a 2D arrays.
      const newInventors = Array.of(...inventors);

      // VERSION A
      // const sorted = newInventors.sort((a, b) => a.year > b.year ? 1 : -1); // this version works with lexological ordering

      // VERSION B
      // This is the way Wes Bos did it
      // const sorted = newInventors.sort((a,b) => {
      //   if (a.year > b.year) {
      //     return 1;
      //   } else {
      //     return -1;
      //   }
      // });

      // VERSION C
      // This only works with numbers
      const sorted = newInventors.sort((a, b) => a.year - b.year);
       
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      const yearsLived = (inventor) => inventor.passed - inventor.year;
      const reduce = inventors.reduce((total, inventor) => {
        return total + yearsLived(inventor);

      }, 0);

      // console.log('totalyears', reduce)

  
      // 5. Sort the inventors by years lived
      // Lived the most years to the least.
      // Don't forget sort affects the original array.

      // VERSION A
      // const sortedYears = inventors.sort((a, b) => yearsLived(a) > yearsLived(b) ? -1 : 1);

      //VERSION B
      const sortedYears = inventors.sort((a, b) => yearsLived(a) - yearsLived(b));

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // Hmmm, I don't know how he grabbed the data from his terminal, but I am going to do this two ways
      // objectA: run the querys inside of the page and get the object you need for this exercise
      // const category = document.querySelector('.mw-category');
      // const links = [...category.querySelectorAll('a')];
      // const de = links
      //   .map(link => link.textContent)
      //   .filter(streetName => streetName.includes('de'));
      // const results = [
      //   "Boulevard de l'Amiral-Bruix",
      //   "Boulevard des Capucines",
      //   "Boulevard de la Chapelle",
      //   "Boulevard de Clichy",
      //   "Boulevard de l'Hôpital",
      //   "Boulevard des Italiens",
      //   "Boulevard de la Madeleine",
      //   "Boulevard de Magenta",
      //   "Boulevard de Rochechouart",
      //   "Boulevard de Sébastopol",
      //   "Boulevard de Strasbourg",
      //   "Boulevard de la Zone"
      // ];
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const lastName = (person => person.split(',')[0]);
      const sortedPeople = people.sort((a, b) => lastName(a) > lastName(b) ? 1 : -1);
      
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      // don't forget to properly reduce you need to have a starting value
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      
      const reducedData = data.reduce((obj, item) => {
        if (!obj[item]) {
          obj[item] = 0;
        }

        obj[item]++

        return obj;
      }, {})