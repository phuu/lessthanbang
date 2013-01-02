module Jekyll
  module Filters
    def summarize(str, splitstr = /\s*<!---extended-->/)
      str.split(splitstr)[0]
    end
  end
end