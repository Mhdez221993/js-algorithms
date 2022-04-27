#! /bin/bash

# clean up stray files from the previous run.
rm -rf host1/map_results/*.txt
rm -rf host2/map_results/*.txt
rm -rf map_results/*.txt
rm -rf reduce_results/results.txt

# Run the map step on both hosts in parallel.
HOST=host1 node map.js &
HOST=host2 node map.js &

# Wait for them to both be done.
wait

# Run the shuffle step.
HOSTS=host1,host2 node shuffle.js

# Run the reduce step.
node reduce.js

# View the final result of the MapReduce job.
cat reduce_results/results.txt
