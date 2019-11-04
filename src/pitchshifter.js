function PitchShifter (ctx, buffer, bufSize, channel) {
	this._st = new SoundTouch();
	this._src = new WebAudioBufferSource(buffer, channel)
	this._f = new SimpleFilter(this._src, this._st, bufSize);
	this._node = getWebAudioNode(ctx, this._f);
}

PitchShifter.prototype.connect = function(toNode) {
	this._node.connect(toNode);
}

PitchShifter.prototype.disconnect = function(toNode) {
	this._node.disconnect();
}

PitchShifter.prototype.updateChannel = function (channel) {
	this._src.channel = channel
}

extend(PitchShifter.prototype, {
	set pitch(p) {
		this._st.pitch = p;
	},
	set rate(r) {
		this._st.rate = r;
	},
	set tempo(t) {
		this._st.tempo = t;
	}
});

module.exports = {
	FifoSampleBuffer: FifoSampleBuffer,
	FilterSupport: FilterSupport,
	SimpleFilter: SimpleFilter,
	AbstractFifoSamplePipe: AbstractFifoSamplePipe,
	RateTransposer: RateTransposer,
	SoundTouch: SoundTouch,
	WebAudioBufferSource: WebAudioBufferSource,
	getWebAudioNode: getWebAudioNode,
	Stretch: Stretch,
	PitchShifter: PitchShifter
}