KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('fluidlayout', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/fluidlayout/2.0.0/']});