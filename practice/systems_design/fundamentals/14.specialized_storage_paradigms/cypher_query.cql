// Populate data.
CREATE (facebook:Company {name:'Facebook'})

CREATE (clement:Candidate {name:'Clement'})
WHERE
CREATE (antonio:Candidate {name:'Antonio'})
CREATE (simon:Candidate {name:'Simon'})

CREATE (alex:Intervieweer {name:'Alex'})
CREATE (meghan:Intervieweer {name:'meghan'})
CREATE (marli:Intervieweer {name:'marli'})
CREATE (sandeep:Intervieweer {name:'sandeep'})
CREATE (molly:Intervieweer {name:'molly'})
CREATE (akshay:Intervieweer {name:'akshay'})
CREATE (aditya:Intervieweer {name:'aditya'})
CREATE (brandon:Intervieweer {name:'brandon'})
CREATE (pedro:Intervieweer {name:'pedro'})
CREATE (ryan:Intervieweer {name:'ryan'})
CREATE (xi:Intervieweer {name:'xi'})
CREATE (simran:Intervieweer {name:'simran'})
CREATE (amanda:Intervieweer {name:'amanda'})

CREATE (alex)-[:INTERVIEWED {score: 'passed'}]->(clement)
CREATE (meghan)-[:INTERVIEWED {score: 'passed'}]->(clement)
CREATE (simran)-[:INTERVIEWED {score: 'passed'}]->(clement)
CREATE (molly)-[:INTERVIEWED {score: 'failed'}]->(clement)
CREATE (marli)-[:INTERVIEWED {score: 'failed'}]->(antonie)
CREATE (akshay)-[:INTERVIEWED {score: 'passed'}]->(antonie)
CREATE (aditya)-[:INTERVIEWED {score: 'passed'}]->(antonie)
CREATE (meghan)-[:INTERVIEWED {score: 'passed'}]->(antonie)
CREATE (marli)-[:INTERVIEWED {score: 'failed'}]->(simon)
CREATE (meghan)-[:INTERVIEWED {score: 'passed'}]->(simon)
CREATE (brandon)-[:INTERVIEWED {score: 'passed'}]->(simon)
CREATE (xi)-[:INTERVIEWED {score: 'failed'}]->(simon)

CREATE (ryan)-[:APPLIED {status: 'rejected'}]->(facebook)
CREATE (simran)-[:APPLIED {status: 'accepted'}]->(facebook)
CREATE (xi)-[:APPLIED {status: 'rejected'}]->(facebook)
CREATE (molly)-[:APPLIED {status: 'rejected'}]->(facebook)
CREATE (alex)-[:APPLIED {status: 'rejected'}]->(facebook)

MATCH (interviewer:Intervieweer)-[:INTERVIEWED {score:'failed'}]->(:Candidate {name: 'Clement'})
WHERE (interviewer)-[:APPLIED {status:'rejected'}]->(:Company {name:'Facebook'})
RETURN interviewer.name