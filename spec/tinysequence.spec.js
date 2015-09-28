describe("tinysequence", function(){
  it("creates an array when no delimiter is given", function(){
    expect( ts(3).length ).toBe(3);
  });
  it("creates a string when a delimiter is given", function(){
    expect( ts(3, " ") ).toBe("0 1 2");
  })
  it("can use a custom delimiter", function(){
    expect( ts(3, "-") ).toBe("0-1-2");
    expect( ts(3, ":") ).toBe("0:1:2");
  });
  it("can transform iterations", function(){
    var seq1 = ts(3, " ", function(x){return x + 1});
    var seq2 = ts(3, null, function(x){return "foo-" + (x+1)});
    expect(seq1).toBe("1 2 3");
    expect(seq2[0]).toBe("foo-1");
    expect(seq2[1]).toBe("foo-2");
    expect(seq2[2]).toBe("foo-3");
  });
});
