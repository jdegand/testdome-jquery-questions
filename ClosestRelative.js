/**
 * @param {HTMLElement} parent The jQuery object wrapping parent
 * @param {string} relativeName The name of relative to be searched
 * @return {HTMLElement} The jQuery object wrapping closest relative
 */
 function closestRelative(parent, relativeName) {
  firstLevel = $(parent).children();
  if (firstLevel.length) {
    result = $(firstLevel).filter(relativeName);
    if (result.length) {
      return result;
    } else {
      return closestRelative(firstLevel, relativeName);
    }
  } else {
    return $([]);
  }

}

// Example case
$('body').html(
  '<James>' +
    '<Dave></Dave>' +
    '<Mike></Mike>' +
    '<Sarah></Sarah>' +
  '</James>'
);

let parent = $('James').eq(0);
let relative = closestRelative(parent, 'Mike');
console.log(relative && relative.eq(0).prop("tagName"));


/*  67%

 function closestRelative(parent, relativeName) {
    // checking parent.result() to parent is problematic bc parent is an object

    let result = $(parent).find(relativeName);

    return result;

  }


  // Example case
  $('body').html(
    '<James>' +
      '<Dave></Dave>' +
      '<Mike></Mike>' +
      '<Sarah></Sarah>' +
    '</James>'
  );

  let parent = $('James').eq(0);
  let relative = closestRelative(parent, 'Mike');
  console.log(relative && relative.eq(0).prop("tagName"));
  */
