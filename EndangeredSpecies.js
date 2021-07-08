function endangeredSpecies(continent, species) {
    let c = $("div").find(`[data-continent='${continent}']`);
    return c.find(`[data-species='${species}']`).text(); 
  }  
  
  // Example case
  $('body').html(
    `<div>
      <ul data-continent="North America">
        <li data-species="California condor">Critically Endangered</li>
        <li data-species="American bison">Near Threatened</li>
      </ul>
      <ul data-continent="Europe">
        <li data-species="Cave bear">Extinct</li>
      </ul>
    </div>`
  );
  
  console.log(endangeredSpecies('North America', 'American bison')); // should print 'Near Threatened'