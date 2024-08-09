(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pizza_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#337768").s().p("AL8J3QgMgIgIgUIgDgHQqOghqNgNQjNgEhsAKIh/AOQhLAIg0gCQgogCgPgQQgPgQAFgYQAEgXARgPQAPgNAXgIQAMgFAfgHQC4gtDGhyQCShWDGiYQCAhhBGhDQDCi5B2jzQAGgNAHgIQgJgNgDgKQgEgQAHgPQAGgPAOgEQAXgGAfAfIBWBVQDBDCBaBiQCZCmBqCRQCNDCBlDVIAHARQAIgIAKgFQAagMAXAJQAYAKAKAaQAKAagMAXQgOAdgoAKQgcAHgtgDIj2gNIgCAFQgHAUgPAJQgHAEgHAAQgJAAgKgHgADNnXQgOAcgQAcIAOAJQALAIASARQA6A8A0BEQAgAqAOANIAeAaQAUARAKAKQALALARAZQARAZAKALQANAOAYASIAnAeQAdAZAqA6QBGBfAcA1QAUAlAQAuQANAmAGAbQAJAkADAcIACAeIAEAeIAFATIDEAKIgEgHQgGgKgLgbQgjhVg+hiQgkg6hRhxQhiiJg3hBQg0g8hnhnQiViVhkhnQgEALgHAMgALPH7IgEg2QgGg+glhaIgVgxQgcg7gog1Qgegng4g6IiHiIQg9g6gPgSIhAhUQgmgygjgYIgUgOQhbCIiKCEQhZBTiVB1IAAACQADAKgGAWIgBAUQAAALgEAHQgFAJgNAHIgXAKIgJAGIgJAEQgEABgHgBIgkgCIgXgCIgXAQQh8BchIApQhyBAhnARQDrADDqAFQgFgCgDgEQgLgKgBgdQgBghAHgNQAGgLASgNQAWgPAkgRQAugVAcgEQAtgGAdAVQAQAMAIATQAIATgFASQgDALgJANIgSAVIgSAWQgLAMgKAHQgHAEgJACQEFAHEDAJQgJgKgFgOQgMgdALgbQALgcAhgWQAygjA8gGQA7gGAqAaQAXAPANAXQAOAYgCAaQgBAYgQAQQgLALgeAJIgkAKIEhAMIAAAAgABYBzIhGgBQglgBgSgGQgggKgJgaQgEgOAEgQQAEgPAKgNQANgPAjgVQArgbAdgNQApgSAlgDQAsgEAfAUQAQALAKARQAKATgCASQgEAggrAiQgZAUgfATQgOAJgLADQgHABgLAAIgJAAg");
	this.shape.setTransform(0.0293,-0.0063);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pizza_mc, new cjs.Rectangle(-120,-63.8,240.1,127.69999999999999), null);


(lib.duck_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walk:0,honk:6,jump:16};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndStop("walk");
	}
	this.frame_6 = function() {
		playSound("DuckQuackSoundEffectHD");
	}
	this.frame_15 = function() {
		this.gotoAndStop("walk");
	}
	this.frame_29 = function() {
		this.gotoAndStop("walk");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1).call(this.frame_6).wait(9).call(this.frame_15).wait(14).call(this.frame_29).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#337768").s().p("AAJAvQgNAAgSgLQgNgIgHgJQgJgNAAgLQABgOAQgPQAMgLAJACIAEAAQABAAABAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAWAGALAGQASAKAFARQAIATgNASQgNARgUAAIgCAAg");
	this.shape.setTransform(414.0359,199.2776);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).to({_off:true},9).wait(15));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#337768").s().p("AovY1IkTgCIgEAAIgCACQgPgBgOgDQgcgHgOgOQgKgLgCgQQgCgQAHgNQAHgMAPgKIAcgRQAbgSApgrQB9iBBhhUQAkgfAOgSIAMgRIABgBQjphwhtixQhMh5gaiuQgTh6ADjFQAAgZADgNQAEgVAKgOQAQgTAfgFQAWgEAjAEQHzAuHuBjIgZvyQgEizAAhQQgBiQAHhyQAHh1AZhBQARguAdgjQAggmAogSQA7gaBGASQBCAQAxAxQBEBFAaB4QARBPADCNIAFETQAMAEAPAJIAdATQAlAYBZAdQBWAdAnAaQAVAQALATQAOAWgIAUQgJAZgfAJQgLADgrACQgoAChAANQhOAPgaADQgXACgPgCIAMLEQAFEDgJCEQgODYg1ClQgaBRgiAsQgxA/hlAsQg9AbhAASQAsBVAtBJQAeAyAIAQQAKAZAKAHQAMAKAaADQBjANBmgLQAcgCAPACQAXADAMAOQAJALAAAQQgBAPgJALQgNAOgiAFQgYADgYABQhsAHhqgQQgVgDgMgEQgRgFgMgKQgLgKgPgbIiakVIAAAAQhlARhsgFQi8gIi1hHIgCADQgGAIgOANQhAA4huBsIiPCMIAQAAIAMgCIgGACICkAAQAtAAAVALQAPAIAIAQQAJAQgGAPQgNAdg3AAIgEAAgAtlDmQgcASAEBAQAKCfAOBRQAYCEA1BcQA4BjBmBPQBZBGB3AyQCjBECnAPQCxAQCegvQCAgmA/hGQA8hDAdiFQAah0AIiWQAFhZgBi0QgBntgFkDQgImhgVlPQgGhWgNgwQgUhIgtgnQgagWgggJQgigJgeAKQgyASggBCQgcA7gIBRQgFA0ACBfIAfV/QACA8gaATQgOAJgUAAQgOAAgXgFQnWhjnagsIgTgBQgYAAgNAJgAJ4p0QALgCAPgCQBFgJBGgTQhGgYgfgNQgkgQgegRgAF0rzQgSgDgJgNQgHgLAAgZQAAgXAGgMQAFgLAKgGQALgHAMgBQAXAGANAHQATALAGAQQAHAQgGAXQgGAZgQAHQgHADgLAAIgMAAQgNAAgHgCgAHFxwQgRgBgMgKQgIgGgDgHQgCgFAAgHIAAgNQgDgRABgIQABgOALgKQALgKAOgBQAEAAACgBQALgBALAGQALAGAFALQAGAMgBAVQgBAggOANQgKAKgPAAIgCAAg");
	this.shape_1.setTransform(0.044,17.1746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#337768").s().p("AgMZsIgEAAQgMABgKgGQgVgLgDgfQgCgRAHghQARhQASilIAGg2IABgIIhNAuQg2AggdAMQggANguALQi2AtjWgQIgNgBIABABQAKAQAEAHQAIAPAJAgQAGAPAOAXQAPAbAFALIAKAUIAPATQAHAOgEAQQgEARgNAIQgNAJgRgBQgQgBgNgJQgLgJgJgRIgOgeIgXgrQgPgbgFgSQgGgWgDgHQgDgHgGgJIgLgQQgIgOgIgUQgSgsALgWQAJgUAVgEQARgDANAJQAHgFAJgCQASgEAkAFQBWALBcgHQBPgGBdgVQA8gOAfgOQAXgKArgbIAcgRQiUgNiQgzIgfgMIgDADIhXgiIgEgCIADgEIAAgBIACgBQjqhwhtiwQhMh6gaitQgTh6ADjGQAAgZADgNQAEgVAKgNQAQgUAfgFQAWgDAjADQHzAvHuBiIgZvyQgEizAAhPQgBiRAHhyQAHh1AZhBQARguAdgiQAggmAogSQA7gaBGARQBCARAxAxQBEBEAaB4QARBPADCNIAFETQAMAEAPAJIAdATQAlAYBZAeQBWAcAnAbQAVAPALATQAOAXgIAUQgJAYgfAJQgLADgrADQgoAChAAMQhOAPgaADQgXADgPgCIAMLDQAFEDgJCEQgODZg1ClQgaBQgiAsQgxA/hlAtQgYAKgYAJQgvAOgvAHQgWAFgVAMIhiALIgUCjQgQCAgOBSIAagCIAvgDQASgBASAAIA4gCIAWgCQANgCAJAAQAbABAOAOQALALABARQAAARgKAMQgJALgUAGQgLACgYABIgiABQhuAEg2AEIgWABIgMgBgAtlCuQgcATAEA/QAKCfAOBRQAYCEA1BdQA4BjBmBPQBZBFB3AyQCjBFCnAOQBDAGBAgDIAOAAQBigHBcgbQCAgmA/hFQA8hEAdiEQAah1AIiVQAFhagBizQgBntgFkDQgImhgVlPQgGhWgNgwQgUhIgtgnQgagXgggIQgigJgeAKQgyARggBCQgcA7gIBRQgFA0ACBfIAfV/QACA9gaASQgOAKgUAAQgOAAgXgFQnWhknagrIgTgBQgYAAgNAIgAJ4qrQALgDAPgBQBFgJBGgTQhGgYgfgOQgkgPgegSgAF0sqQgSgEgJgMQgHgLAAgaQAAgXAGgLQAFgLAKgHQALgHAMAAQAXAFANAHQATAMAGAQQAHAQgGAXQgGAZgQAGQgHADgLAAIgMABQgNAAgHgCgAHFyoQgRAAgMgKQgIgHgDgGQgCgFAAgIIAAgNQgDgQABgIQABgOALgKQALgLAOAAQAEAAACgCQALAAALAGQALAGAFALQAGAMgBAVQgBAfgOAOQgKAJgPAAIgCAAg");
	this.shape_2.setTransform(0.044,12.723);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#337768").s().p("Ai4aaIgFABQgPAEgPgHQgOgHgGgNQgDgHgBgIIgBgHQgCgMAHgKIAFgVIAFgpQABgKAHgaIAOg4IAQg8IgHgDQg2gWgmgqIgsAqQgpAngUAZIgTAcQgMARgJAKQgcAegeABQgSAAgOgLQgPgLgCgQQgBgQALgQQAHgKASgRQAXgVAzg7QAtg0AegZQAngjAhACQAbABAiAfQApAmARAHIAShCQAXhOAGgfIACgJIgigDIg0gHIgXgGIgsgKIgVgHIgCAAIgOABIADgHIgEgDQhXgYhUglQkEhzh1i9QhMh6gaitQgTh6ADjGQAAgZADgNQAEgVAKgNQAQgUAfgFQAWgDAjADQHzAvHuBiIgZvyQgEizAAhPQgBiRAHhyQAHh1AZhBQARguAdgiQAggmAogSQA7gaBGARQBCARAxAxQBEBEAaB4QARBPADCNIAFETQAMAEAPAJIAdATQAlAYBZAeQBWAcAnAbQAVAPALATQAOAXgIAUQgJAYgfAJQgLADgrADQgoAChAAMQhOAPgaADQgXADgPgCIAMLDQAFEDgJCEQgODZg1ClQgaBQgiAsQgwA+hiAsQgzAQgfANIgQAIQgpANgqAJIABAFQAKAxgRA2QgOAwgiAtQgeAqgiAUQgbAPg3ANQgyALgaACIgTAAIgLAyQgJAzgEANIgHAcQgEARgBAMIgBAIIAKABQAjAEBAgLQBEgMAfABQAXABARAKQAUALACASQABANgJAMQgIAMgOAGQgLAFgPACIgcACQgoAChPALQgaADgXAAQggAAgagFgAgcR9QgBAKgGAVIgtCZQAjgCAggIQAkgIAUgQQANgJALgRQAGgKALgWQANgaAEgMQAHgWgCgSIgDgSIgDgLQg+AHhBgBIgBAJgAtlB8QgcATAEA/QAKCfAOBRQAYCEA1BdQA4BjBmBPQBZBFB3AyQBXAlBYAVIAYAEIAsAKQArAHAsAEQCxAQCegvQCAgmA/hFQA8hEAdiEQAah1AIiVQAFhagBizQgBntgFkDQgImhgVlPQgGhWgNgwQgUhIgtgnQgagXgggIQgigJgeAKQgyARggBCQgcA7gIBRQgFA0ACBfIAfV/QACA9gaASQgOAKgUAAQgOAAgXgFQnWhknagrIgTgBQgYAAgNAIgAJ4rdQALgDAPgBQBFgJBGgTQhGgYgfgOQgkgPgegSgAF0tcQgSgEgJgMQgHgLAAgaQAAgXAGgLQAFgLAKgHQALgHAMAAQAXAFANAHQATAMAGAQQAHAQgGAXQgGAZgQAGQgHADgLAAIgMABQgNAAgHgCgAHFzaQgRAAgMgKQgIgHgDgGQgCgFAAgIIAAgNQgDgQABgIQABgOALgKQALgLAOAAQAEAAACgCQALAAALAGQALAGAFALQAGAMgBAVQgBAfgOAOQgKAJgPAAIgCAAg");
	this.shape_3.setTransform(0.044,7.7264);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#337768").s().p("AjbakIgfgDQh0gOh0AEQghABgPgEQgcgHgKgUQgIgRAIgXQAFgQAPgXQA/hgCMjgIBciSIgxgIIgDgHIgEABQgKgBgRgHQgPgGgJgGIAAAAIhZghIgfgNQkEhzh1i9QhMh5gaiuQgTh6ADjFQAAgZADgNQAEgVAKgOQAQgTAfgFQAWgEAjAEQHzAuHuBjIgZvyQgEizAAhQQgBiQAHhyQAHh1AZhBQARguAdgjQAggmAogSQA7gaBGASQBCAQAxAxQBEBFAaB4QARBPADCNIAFETQAMAEAPAJIAdATQAlAYBZAdQBWAdAnAaQAVAQALATQAOAWgIAUQgJAZgfAJQgLADgrACQgoAChAANQhOAPgaADQgXACgPgCIAMLEQAFEDgJCEQgODYg1ClQgaBRgiAsQgwA9hiAsIgsAPIhVAbIg2ALQA9A/AgBbQAKAeAAAUQAAAXgMAbQgVA1gsApQgrAog3ASQApAwAzARQAXAIAHAFQAKAIAFAMQAEAMgDAMQgFASgSAKQgRAJgTgBQgdgDgngcQhFgyg2hFQgSgZgBgRQgDgWARgPQAPgPAfgBIAZAAQAPAAAJgCQAvgIAng2QATgaACgUQACgTgLgaQgfhShGg3IgPgNQh0ALh3gLQgFATgSAZQg9BegpBCQgvBLh2DDQAvgCA/AEIBuAHQAhACAQAGQAMAGAIAJQAJALAAALQACAPgLANQgLANgQAEQgMAEgPAAIgDAAgAtlB3QgcASAEBAQAKCfAOBRQAYCEA1BcQA4BjBmBPQBQA/BpAuQDlBqD8gJQBrgCBlggQArgOAqgTQBBgfAogsQA8hDAdiFQAah0AIiWQAFhZgBi0QgBntgFkDQgImhgVlPQgGhWgNgwQgUhIgtgnQgagWgggJQgigJgeAKQgyASggBCQgcA7gIBRQgFA0ACBfIAfV/QACA8gaATQgOAJgUAAQgOAAgXgFQnWhjnagsIgTgBQgYAAgNAJgAJ4rjQALgCAPgCQBFgJBGgTQhGgYgfgNQgkgQgegRgAF0tiQgSgDgJgNQgHgLAAgZQAAgXAGgMQAFgLAKgGQALgHAMgBQAXAGANAHQATALAGAQQAHAQgGAXQgGAZgQAHQgHADgLAAIgMAAQgNAAgHgCgAHFzfQgRgBgMgKQgIgGgDgHQgCgFAAgHIAAgNQgDgRABgIQABgOALgKQALgKAOgBQAEAAACgBQALgBALAGQALAGAFALQAGAMgBAVQgBAggOANQgKAKgPAAIgCAAg");
	this.shape_4.setTransform(0.044,10.2755);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#337768").s().p("AlvaUQgLgBgagGQgXgGgOgBQgQAAgfAEQgUAAgjgIQgngKgQgBIggAAQgTAAgMgDQgRgDgMgMQgHgGgDgHQgKAAgJgFQgPgHgFgNQgGgQAJgTQAGgOAQgTQBBhKA2hLIBAhZICSjPQgwgRgvgVQkEhzh1i9QhMh6gaitQgTh6ADjGQAAgZADgNQAEgVAKgNQAQgUAfgFQAWgDAjADQHzAvHuBiIgZvyQgEizAAhPQgBiRAHhyQAHh1AZhBQARguAdgiQAggmAogSQA7gaBGARQBCARAxAxQBEBEAaB4QARBPADCNIAFETQAMAEAPAJIAdATQAlAYBZAeQBWAcAnAbQAVAPALATQAOAXgIAUQgJAYgfAJQgLADgrADQgoAChAAMQhOAPgaADQgXADgPgCIAMLDQAFEDgJCEQgODZg1ClQgaBQgiAsQgxA/hlAtIgKAEIAGADQgTAIgRAEIggAIQgLADgJAEIAAAAIApAyQA9BKAYAkIAsBGQAYAlArA6IAxBBQAIAKAHACQAJACAOgLIBNg9QAggYATgFQAPgEAPAFQAPAEAHANQAKARgIAVQgHARgRAPQgSASgfAUIg1AiIgbAUQgQALgOAGQgmAQgbgSQgKgHgOgUIhZh9Igjg0IgqhCQg0hShBhFQgVgXgGgMQgGgKgCgJQh2AYiAgGQhOgDhNgOIgBAAIgDAHIhQgWIgDgBIgRAWQgrA2gnA/IgXAkQgNAVgLANQgQASgHAKIgRAhQgGAJgNAOIgVAVQgJALgMAWQgNAYgHAJIgUAXIgUAWIgRAYIgBADQAVAAAgAEIA6AGIBLAEQAtACAeAHQAbAHAOAMQAJAIAEAKQAFAMgCAKQgEASgTAJQgPAIgRAAIgGgBgAkqP4QAHAEAFAHQBeAaBgAIQCxAQCegvQCAgmA/hFQA8hEAdiEQAah1AIiVQAFhagBizQgBntgFkDQgImhgVlPQgGhWgNgwQgUhIgtgnQgagXgggIQgigJgeAKQgyARggBCQgcA7gIBRQgFA0ACBfIAfV/QACA9gaASQgOAKgUAAQgOAAgXgFQnWhknagrQgngEgRALQgcATAEA/QAKCfAOBRQAYCEA1BdQA4BjBmBPQBZBFB3AyQAuAUAvAPIAFgCIAKgBQALAAAJAGgAJ4rTQALgDAPgBQBFgJBGgTQhGgYgfgOQgkgPgegSgAF0tSQgSgEgJgMQgHgLAAgaQAAgXAGgLQAFgLAKgHQALgHAMAAQAXAFANAHQATAMAGAQQAHAQgGAXQgGAZgQAGQgHADgLAAIgMABQgNAAgHgCgAHFzQQgRAAgMgKQgIgHgDgGQgCgFAAgIIAAgNQgDgQABgIQABgOALgKQALgLAOAAQAEAAACgCQALAAALAGQALAGAFALQAGAMgBAVQgBAfgOAOQgKAJgPAAIgCAAg");
	this.shape_5.setTransform(0.044,11.7092);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#337768").s().p("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");
	this.shape_6.setTransform(-10.4777,21.4321);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#337768").s().p("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");
	this.shape_7.setTransform(-13.1636,23.8196);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#337768").s().p("AovY1IkTgCIgEAAIgCACQgPgBgOgDQgcgHgOgOQgKgLgCgQQgCgQAHgNQAHgMAPgKIAcgRQAbgSApgrQB9iBBhhUQAkgfAOgSIAMgRIABgBQjphwhtixQhMh5gaiuQgTh6ADjFQAAgZADgNQAEgVAKgOQAQgTAfgFQAWgEAjAEQHzAuHuBjIgZvyQgEizAAhQQgBiQAHhyQAHh1AZhBQARguAdgjQAggmAogSQA7gaBGASQBCAQAxAxQBEBFAaB4QARBPADCNIAFETQAMAEAPAJIAdATQAlAYBZAdQBWAdAnAaQAVAQALATQAOAWgIAUQgJAZgfAJQgLADgrACQgoAChAANQhOAPgaADQgXACgPgCIAMLEQAFEDgJCEQgODYg1ClQgaBRgiAsQgxA/hlAsQg9AbhAASQAsBVAtBJQAeAyAIAQQAKAZAKAHQAMAKAaADQBjANBmgLQAcgCAPACQAXADAMAOQAJALAAAQQgBAPgJALQgNAOgiAFQgYADgYABQhsAHhqgQQgVgDgMgEQgRgFgMgKQgLgKgPgbIiakVIAAAAQhlARhsgFQi8gIi1hHIgCADQgGAIgOANQhAA4huBsIiPCMIAQAAIAMgCIgGACICkAAQAtAAAVALQAPAIAIAQQAJAQgGAPQgNAdg3AAIgEAAgAtlDmQgcASAEBAQAKCfAOBRQAYCEA1BcQA4BjBmBPQBZBGB3AyQCjBECnAPQCxAQCegvQCAgmA/hGQA8hDAdiFQAah0AIiWQAFhZgBi0QgBntgFkDQgHlWgPkgIgMAIQghASgyAAQgogBgagMQgfgOgSgfQgSgfADgiQABgMAFgTQAEgSAEgJQAEgLAMgTQAQgXALgLQAIgGAPgJQARgJAHgFIANgKIAOgJQAUgIAeAKIARAHQgUhGgsgnQgagWgggJQgigJgeAKQgyASggBCQgcA7gIBRQgFA0ACBfIAfV/QACA8gaATQgOAJgUAAQgOAAgXgFQnWhjnagsIgTgBQgYAAgNAJgAJ4p0QALgCAPgCQBFgJBGgTQhGgYgfgNQgkgQgegRgAGxz5QgiAXgIA3QgCANADAHQAGANAZACQAjAEATgMQANgJAHgQQAGgPgBgRQgBgXgMgNIgDgDQAHAIADAKQADAOgGAOQgHAOgNAGQgHAEgJABQgJAAgLgEQgNgGgHgNQgHgOACgOQADgPAMgJQAMgKAOAAIAKABQgHgDgFAAQgIAAgKAHgAFuqFQgNgCgSgIQgWgKgPgLQglgagQgpQgPgrANgrQAFgRARgbQATgfAUgQQAQgNAmgPQAVgIAMgBQAWAAAbAQQAiAUAYAdQAPASAGAPQAFANAEAUQAHAugQAtQgLAggVAYQgXAageAHQgPADgZAAQgTAAgJgCgAF+tkQgIABgHAFQgQAJgPAcQgOAaACAQQADAYAhATQARAJAOACQASACAOgLQAIgHAFgPQAPgkgPgcQgEgHgRgTQgTgSgOAAIAAAAgAF2rmQgOgFgHgNQgHgNADgPQADgQALgJQAOgLAQABQAPABALALQALALACAPQACAOgJANQgIANgOAFQgGACgHAAQgIAAgIgEg");
	this.shape_8.setTransform(0.044,17.1746);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#337768").s().p("AqLX5Qg5gGhcgQQg1gIgHgcQgEgPALgPQAHgKAKgFQAMgQAigLIEyhlIgZgZQgNgPgFgPQgFgSAFgRIACgGIgEgBIABgBIAMgQIACgCQjqhwhtiwQhMh6gaitQgTh6ADjGQAAgZADgNQAEgVAKgNQAQgUAfgFQAWgDAjADQHzAvHuBiIgZvyQgEizAAhPQgBiRAHhyQAHh1AZhBQARguAdgiQAggmAogSQA7gaBGARQBCARAxAxQBEBEAaB4QARBPADCNIAFETQAMAEAPAJIAdATQAlAYBZAeQBWAcAnAbQAVAPALATQAOAXgIAUQgJAYgfAJQgLADgrADQgoAChAAMQhOAPgaADQgXADgPgCIAMLDQAFEDgJCEQgODZg1ClQgaBQgiAsQgxA/hlAtIgUAIQATAPAZAYQAPAQAEAIQAFALAAAXQAAAWgFALQgGAKgPANQgYATgOAIQgWANgUACQAUACAegDIAygGQASgBAkAAIA+AAQAdABAKAGQAQAJADAVQADAUgNANQgKALgSADQgLACgWAAIilAIQhkAFhBgHQgmgFgQgNQgSgPAAgbQAAgaARgQQANgNAcgKQA0gVAwgPQAUgGAJgEQAQgIAJgKIgegXQgRgOgLgCQgRgBgIgBQgHgBgHgDQgUACgUgCQgcgEgOAAQgaACgLARIgBADQhPAIhRgEQi8gIi0hGIgDADIgCACQARAXAIARQAMAagEAXQgHApgvAXQgQAIgZAHIgrALQgZAHhOAeQA+AGA/ABQAjAAAQAHQAMAFAIALQAIAMgBAMQgCAUgXAKQgNAHgbABIgpABQgzAAg7gGgAtlEcQgcATAEA/QAKCfAOBRQAYCEA1BdQA4BjBmBPQBZBFB3AyQCjBFCnAOQCxAQCegvQCAgmA/hFQA8hEAdiEQAah1AIiVQAFhagBizQgBntgFkDQgImhgVlPQgGhWgNgwQgUhIgtgnQgagXgggIQgigJgeAKQgyARggBCQgcA7gIBRQgFA0ACBfIAfV/QACA9gaASQgOAKgUAAQgOAAgXgFQnWhknagrIgTgBQgYAAgNAIgAJ4o9QALgDAPgBQBFgJBGgTQhGgYgfgOQgkgPgegSgAF0q8QgSgEgJgMQgHgLAAgaQAAgXAGgLQAFgLAKgHQALgHAMAAQAXAFANAHQATAMAGAQQAHAQgGAXQgGAZgQAGQgHADgLAAIgMABQgNAAgHgCgAHFw6QgRAAgMgKQgIgHgDgGQgCgFAAgIIAAgNQgDgQABgIQABgOALgKQALgLAOAAQAEAAACgCQALAAALAGQALAGAFALQAGAMgBAVQgBAfgOAOQgKAJgPAAIgCAAg");
	this.shape_9.setTransform(0.044,25.724);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#337768").s().p("AlkevQgPgCgMgNQgLgMgEgRQgEgNAAgTIACggQAJh4gkh2IgJgiQgEgUAEgPQAEgRAQgLIACgCIACgLIBLkhQANgyAFgaQAJgrACgiQACghgDgpIgHhJIgBgNQgpgOgpgRIgCADIgCACIgHgCQglgNgOgKIgOgNIgIgHIgHgEIgGgDQjRhyhkixQhGh9gZizQgSh+ADjLQAAgaADgOQADgVAKgOQAPgUAdgFQAUgEAiAEQHUAwHPBlIgXwUQgEi4AAhTQAAiVAGh1QAGh5AYhDQAQgwAbgkQAegnAmgSQA3gbBBASQA/ARAtAyQBBBHAYB8QAQBSACCRIAFEcQALAEAPAKIAbATQAjAZBTAfQBRAdAkAbQAUAQALAUQAMAXgHAVQgJAZgdAJQgKAEgoACQglACg9ANQhJAQgZADQgVACgOgCIAMLcQAEEKgICJQgNDfgzCqQgXBUghAtQgtBBhgAuIgSAJIAMALIgBABQgVAPgFACQgIAEgOAAIgXABIgNACIgFAmQgSBggcB1QgbB2gcBfQgQA0gPAnQgTA0gFAaIABACQAjBSAPBCQAFAVAHAsQAIAmAIAZIAIAXQAEAOABAKQACAdgRAOQgOAMgVgFQgUgFgMgQQgKgOgGgVIgHgmQgRhwgfhZQgLgCgIgIQgSgUAHgtIgHgVQgEgPAFgLQAGgNAOgEIAEgMQAahEAKgjQAFgPAHgbIAMgpQAQgxAHgZQAIgaAJguIAPhIQAQg2AGgbQAGgbADgfIABgKQgUgDgMAAQgYACgKARIgCADQhJAJhNgEQhagEhYgVIABAEQAFAdAAA8QABA6gEAjQgEAegOA/IgeB/QgZBnghBrQgHAYgGAJIgBAAQAeBdACBlIAAA9QAAAkAEAZQAFAbgCAJQgDAPgOAKQgLAIgMAAIgGgBgAswhYQgaATAEBCQAJCjAOBTQAWCJAxBfQA1BmBgBSQBTBIBwAzQCZBHCdAPQCmARCVgxQB4gnA6hIQA5hGAbiIQAZh5AHiaQAEhdAAi4QgBn+gFkLQgHmvgUlaQgFhZgNgxQgShLgrgoQgYgXgfgJQgggJgcAKQgvASgeBEQgaA9gHBUQgFA2ACBiIAdWuQACA9gZATQgMAKgUAAQgMAAgWgFQm5hmm9gtIgSgBQgXAAgMAJgAJRvPQAKgCAOgCQBCgJBBgUQhBgYgegOQgigQgbgSgAFdxSQgRgDgIgNQgHgMAAgaQAAgYAGgMQAEgLAKgHQAKgHALAAQAWAFAMAIQASALAGARQAGAQgGAYQgFAagPAHQgGADgLAAIgLAAQgMAAgHgCgAGp3cQgQAAgLgKQgHgHgDgHQgCgFAAgIIAAgNQgDgRABgJQABgOAKgKQAKgLANgBQAFAAABgBQALgBAKAGQAKAHAFALQAFAMgBAWQgBAhgMAOQgJAJgPAAIgCAAg");
	this.shape_10.setTransform(0.035,-75.96);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#337768").s().p("AlkevQgPgCgMgNQgLgMgEgRQgEgNAAgTIACggQAJh4gkh2IgJgiQgEgUAEgPQAEgRAQgLIACgBIACgMIBLkhQANgyAFgaQAJgrACgiQACghgDgpIgHhJIgBgNQgpgOgpgRIgCADIgCADIgHgDQglgNgOgKIgOgNIgIgHIgHgEIgGgDQjRhyhkixQhGh9gZizQgSh+ADjLQAAgaADgOQADgVAKgOQAPgUAdgFQAUgEAiAEQHUAwHPBlIgXwUQgEi4AAhTQAAiVAGh1QAGh5AYhDQAQgwAbgkQAegnAmgSQA3gbBBASQA/ARAtAyQBBBHAYB8QAQBSACCRIAFEcQALAEAPAKIAbATQAjAZBTAfQBRAdAkAbQAUAQALAUQAMAXgHAVQgJAZgdAJQgKAEgoACQglACg9ANQhJAQgZADQgVACgOgCIAMLcQAEEKgICJQgNDfgzCqQgXBUghAtQgtBBhgAuIgSAJIANALIgCABQgVAPgFACQgIAEgOAAIgXABIgNACIgFAmQgSBggcB1QgbB2gcBfQgQA0gPAnQgTA0gFAaIABACQAjBSAPBCQAFAVAHAsQAIAmAIAZIAIAXQAEAOABAKQACAdgRAOQgOAMgVgFQgUgFgMgQQgKgOgGgVIgHgmQgRhwgfhZQgLgCgIgIQgSgUAIgtQgGgNgCgIQgEgPAFgLQAGgNAOgEIAEgMQAahEAKgjQAFgPAHgbIAMgpQAQgxAHgZQAIgaAJguIAPhIQAQg2AGgbQAGgbADgfIABgKQgUgDgMAAQgYACgKARIgCADQhJAJhNgEQhZgEhYgVIAAAEQAFAdAAA8QABA6gEAjQgEAegOA/IgeB/QgZBnghBrQgHAYgGAJIgBABQAeBdACBkIAAA9QAAAkAEAZQAFAbgCAJQgDAPgOAKQgLAIgMAAIgGgBgAswhYQgaATAEBCQAJCjAOBTQAWCJAxBfQA1BmBgBSQBTBIBwAzQCZBHCdAPQCmARCVgxQB4gnA6hIQA5hGAbiIQAZh5AHiaQAEhdAAi4QgBn+gFkLQgHmvgUlaQgFhZgNgxQgShLgrgoQgYgXgfgJQgggJgcAKQgvASgeBEQgaA9gHBUQgFA2ACBiIAdWuQACA9gZATQgMAKgUAAQgMAAgWgFQm5hmm9gtIgSgBQgXAAgMAJgAJRvPQAKgCAOgCQBCgJBBgUQhBgYgegOQgigQgbgSgAFdxSQgRgDgIgNQgHgMAAgaQAAgYAGgMQAEgLAKgHQAKgHALAAQAWAFAMAIQASALAGARQAGAQgGAYQgFAagPAHQgGADgLAAIgLAAQgMAAgHgCgAGp3cQgQAAgLgKQgHgHgDgHQgCgFAAgIIAAgNQgDgRABgJQABgOAKgKQAKgLANgBQAFAAABgBQALgBAKAGQAKAHAFALQAFAMgBAWQgBAhgMAOQgJAJgPAAIgCAAg");
	this.shape_11.setTransform(0.035,-95.96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_9,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:0.044,y:25.724}}]},1).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_9,p:{regX:1.9,regY:150.1,scaleX:1.0418,scaleY:0.9539,x:2,y:175.8}}]},1).to({state:[{t:this.shape_9,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:0.044,y:25.724}}]},2).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.8,-292.7,521,496.7);


// stage content:
(lib.duckcharacter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		this.duck_mc.stop();
		
		
		window.addEventListener("keydown", keyPressed.bind(this));
		
		
		function keyPressed(evt) {
			var e = evt.keyCode
			
			//right arrow
			if(e == 39){
					this.duck_mc.gotoAndStop(this.duck_mc.currentFrame +1);
					this.duck_mc.x+=10;
					this.duck_mc.scaleX = 1;
			}else if (e == 37){
					this.duck_mc.x-=10;
					this.duck_mc.gotoAndStop(this.duck_mc.currentFrame +1);		
					this.duck_mc.scaleX = -1;
			}else if (e == 32){
					this.duck_mc.gotoAndPlay("honk");
			}else if (e == 38){
				this.duck_mc.y-=10;
				this.duck_mc.gotoAndStop(this.duck_mc.currentFrame +1);		
			}else if (e == 40){
				this.duck_mc.y+=10;
				this.duck_mc.gotoAndStop(this.duck_mc.currentFrame +1);		
			}else if (e == 17){
				this.duck_mc.gotoAndPlay("jump");		
			}
		
		
		if (this.duck_mc.x >= 1540 && this.duck_mc.x <= 1800 && this.duck_mc.y >= 600 && this.duck_mc.y <= 730){
				this.pizza_mc.visible = false;
			}else{
				this.pizza_mc.visible = true;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.duck_mc = new lib.duck_mc();
	this.duck_mc.name = "duck_mc";
	this.duck_mc.setTransform(732.75,652.35);

	this.timeline.addTween(cjs.Tween.get(this.duck_mc).wait(1));

	// bg
	this.pizza_mc = new lib.pizza_mc();
	this.pizza_mc.name = "pizza_mc";
	this.pizza_mc.setTransform(1672.6,668.6);

	this.timeline.addTween(cjs.Tween.get(this.pizza_mc).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1595.1,1050.6,197.60000000000014,-222.0999999999999);
// library properties:
lib.properties = {
	id: 'D86BB9476F11134EAA491BD7517DC66E',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/DuckQuackSoundEffectHD.mp3?1723215925966", id:"DuckQuackSoundEffectHD"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D86BB9476F11134EAA491BD7517DC66E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;