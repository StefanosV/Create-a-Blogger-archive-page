function LoadTheArchive(TotalFeed) {
  var PostTitles = new Array();
  var PostURLs = new Array();
  var PostYears = new Array();
  var PostMonths = new Array();
  var PostDays = new Array();
  if("entry" in TotalFeed.feed) 
  {
    var PostEntries=TotalFeed.feed.entry.length;
    for(var PostNum=0; PostNum<PostEntries ; PostNum++) 
      {
        var ThisPost = TotalFeed.feed.entry[PostNum];
	PostTitles.push(ThisPost.title.$t);
	PostYears.push(ThisPost.published.$t.substring(0,4));
	PostMonths.push(ThisPost.published.$t.substring(5,7));
	PostDays.push(ThisPost.published.$t.substring(8,10));
	var ThisPostURL;
	for(var LinkNum=0; LinkNum < ThisPost.link.length; LinkNum++) {
          if(ThisPost.link[LinkNum].rel == "alternate") {
	    ThisPostURL = ThisPost.link[LinkNum].href;
            break;
	  }
	}
	PostURLs.push(ThisPostURL);
      }
    }
  DisplaytheTOC(PostTitles,PostURLs,PostYears,PostMonths,PostDays);
}

function DisplaytheTOC(PostTitles,PostURLs,PostYears,PostMonths,PostDays) {
  var MonthNames=["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"];
  var NumberOfEntries=PostTitles.length;
  for(var EntryNum = 0; EntryNum < NumberOfEntries; EntryNum++) {
    NameOfMonth = MonthNames[parseInt(PostMonths[EntryNum],10)-1];
    if (PostYears[EntryNum] == "2019") {
      document.getElementById("nineteen").innerHTML += insertHtml();
    }
    else if (PostYears[EntryNum] == "2018") {
      document.getElementById("eighteen").innerHTML += insertHtml();
    }
    else if (PostYears[EntryNum] == "2017") {
      document.getElementById("seventeen").innerHTML += insertHtml();
    }
    else if (PostYears[EntryNum] == "2016") {
      document.getElementById("sixteen").innerHTML += insertHtml();
    }
    else if (PostYears[EntryNum] == "2015") {
      document.getElementById("fifteen").innerHTML += insertHtml();
    }
  }
  function insertHtml() {
    return '<br/><a href ="' + PostURLs[EntryNum] + '">' + PostTitles[EntryNum] + "</a> (" + parseInt(PostDays[EntryNum],10) + " " + NameOfMonth + " " + PostYears[EntryNum] + ")";
  }
}
