def num_of_paths_to_dest(n)
  move = Array.new(n) { Array.new(n) { 0 } }
  move[0][0] = 1
  i = 1
  j = 0

  while i < n
    while j <= i

      puts move[i][j]
      j += 1
    end
    i += 1
  end

  # move
end

n = 4
puts num_of_paths_to_dest(n)
