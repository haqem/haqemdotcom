"\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";angular["\x6D\x6F\x64\x75\x6C\x65"]("\x63\x67\x70\x61\x43\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72")["\x66\x61\x63\x74\x6F\x72\x79"]("\x63\x67\x70\x61\x46\x61\x63\x74\x6F\x72\x79",function($http){function getGradePoints(){var gradePoints={"\x41":4.00,"\x42\x2B":3.50,"\x42":3.00,"\x43\x2B":2.50,"\x43":2.00,"\x44\x2B":1.50,"\x44":1.00,"\x45":0.00};return gradePoints}function getGrades(){var grades=getGradePoints();return Object["\x6B\x65\x79\x73"](grades)}function getCreditHours(){return [1,2,3,4,5,6,7,8,9]}function getStanding(data,gradeType){if(isNaN(data[gradeType])){return data};if(data[gradeType]>= 3.8){data[gradeType+ "\x53\x74\x61\x6E\x64\x69\x6E\x67"]= "\x44\x65\x61\x6E\x27\x73\x20\x4C\x69\x73\x74";data[gradeType+ "\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E"]= true;data[gradeType+ "\x50\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72"]= "\x62\x67\x2D\x73\x75\x63\x63\x65\x73\x73"}else {if(data[gradeType]>= 3.5&& data[gradeType]< 3.8){data[gradeType+ "\x53\x74\x61\x6E\x64\x69\x6E\x67"]= "\x44\x65\x61\x6E\x27\x73\x20\x4C\x69\x73\x74";data[gradeType+ "\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E"]= true;data[gradeType+ "\x50\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72"]= "\x62\x67\x2D\x69\x6E\x66\x6F"}else {if(data[gradeType]>= 2&& data[gradeType]< 3.5){data[gradeType+ "\x53\x74\x61\x6E\x64\x69\x6E\x67"]= "\x47\x6F\x6F\x64\x20\x53\x74\x61\x6E\x64\x69\x6E\x67";data[gradeType+ "\x50\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72"]= "\x62\x67\x2D\x77\x61\x72\x6E\x69\x6E\x67"}else {data[gradeType+ "\x53\x74\x61\x6E\x64\x69\x6E\x67"]= "\x4E\x6F\x74\x20\x47\x6F\x6F\x64\x20\x73\x74\x61\x6E\x64\x69\x6E\x67\x20\x2D\x20\x43\x6F\x6E\x74\x61\x63\x74\x20\x79\x6F\x75\x72\x20\x61\x63\x61\x64\x65\x6D\x69\x63\x20\x61\x64\x76\x69\x73\x6F\x72";data[gradeType+ "\x50\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72"]= "\x62\x67\x2D\x64\x61\x6E\x67\x65\x72"}}};data[gradeType+ "\x50\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72\x57\x69\x64\x74\x68"]= (data[gradeType]/ 4.00)* 100;return data}function calculateGPA(data){var gradePoints=getGradePoints();var result={"\x74\x6F\x74\x61\x6C\x43\x72\x65\x64\x69\x74\x73":0,"\x67\x70\x61":0,"\x67\x72\x61\x64\x65\x50\x6F\x69\x6E\x74":0};var dataKey;for(dataKey in data){if(!data["\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79"](dataKey)|| data[dataKey]=== null){continue};if("\x68\x6F\x75\x72" in  data[dataKey]&& "\x67\x72\x61\x64\x65" in  data[dataKey]){if(!["\x57","\x57\x50"]["\x69\x6E\x63\x6C\x75\x64\x65\x73"](data[dataKey]["\x67\x72\x61\x64\x65"])){var credit=gradePoints[data[dataKey]["\x67\x72\x61\x64\x65"]]* data[dataKey]["\x68\x6F\x75\x72"];result["\x74\x6F\x74\x61\x6C\x43\x72\x65\x64\x69\x74\x73"]+= data[dataKey]["\x68\x6F\x75\x72"];result["\x67\x72\x61\x64\x65\x50\x6F\x69\x6E\x74"]+= credit}}};result["\x67\x70\x61"]= (result["\x67\x72\x61\x64\x65\x50\x6F\x69\x6E\x74"]/ result["\x74\x6F\x74\x61\x6C\x43\x72\x65\x64\x69\x74\x73"])["\x74\x6F\x46\x69\x78\x65\x64"](4)["\x73\x6C\x69\x63\x65"](0,-2);result= getStanding(result,"\x67\x70\x61");return result}function calculateGPAExpected(data,result){var totalGradePoint=data["\x63\x72\x65\x64\x69\x74\x73\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64"]* data["\x63\x67\x70\x61"];var expectedTotalGradePoint=data["\x63\x67\x70\x61\x45\x78\x70\x65\x63\x74\x65\x64"]* (data["\x63\x75\x72\x72\x65\x6E\x74\x43\x72\x65\x64\x69\x74\x73"]+ data["\x63\x72\x65\x64\x69\x74\x73\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64"]);result["\x67\x70\x61\x45\x78\x70\x65\x63\x74\x65\x64"]= ((expectedTotalGradePoint- totalGradePoint)/ data["\x63\x75\x72\x72\x65\x6E\x74\x43\x72\x65\x64\x69\x74\x73"])["\x74\x6F\x46\x69\x78\x65\x64"](4)["\x73\x6C\x69\x63\x65"](0,-2);return result}function calculateCGPA(data,result){var totalCredits=result["\x74\x6F\x74\x61\x6C\x43\x72\x65\x64\x69\x74\x73"]+ data["\x63\x72\x65\x64\x69\x74\x73\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64"];var totalGradePoint=(data["\x63\x72\x65\x64\x69\x74\x73\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64"]* data["\x63\x67\x70\x61"])+ result["\x67\x72\x61\x64\x65\x50\x6F\x69\x6E\x74"];result["\x63\x67\x70\x61\x43\x61\x6C\x63\x75\x6C\x61\x74\x65\x64"]= (totalGradePoint/ totalCredits)["\x74\x6F\x46\x69\x78\x65\x64"](4)["\x73\x6C\x69\x63\x65"](0,-2);result= getStanding(result,"\x63\x67\x70\x61\x43\x61\x6C\x63\x75\x6C\x61\x74\x65\x64");if("\x63\x75\x72\x72\x65\x6E\x74\x43\x72\x65\x64\x69\x74\x73","\x63\x67\x70\x61\x45\x78\x70\x65\x63\x74\x65\x64" in  data){result= calculateGPAExpected(data,result)};return result}function calculateGrades(data){var result=calculateGPA(data["\x72\x6F\x77\x73"]);if("\x63\x67\x70\x61" in  data&& "\x63\x72\x65\x64\x69\x74\x73\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64" in  data&& data["\x63\x67\x70\x61"]<= 4&& data["\x63\x72\x65\x64\x69\x74\x73\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64"]> 0){result= calculateCGPA(data,result)};result["\x67\x72\x61\x64\x65\x50\x6F\x69\x6E\x74"]= result["\x67\x72\x61\x64\x65\x50\x6F\x69\x6E\x74"]["\x74\x6F\x46\x69\x78\x65\x64"](4)["\x73\x6C\x69\x63\x65"](0,-2);return result}return {getGradePoints:getGradePoints,getGrades:getGrades,getCreditHours:getCreditHours,calculateGrades:calculateGrades}})