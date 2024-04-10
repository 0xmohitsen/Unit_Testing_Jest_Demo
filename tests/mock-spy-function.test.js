test('mock implemenetion of a basic function', () => {
    const mockCallBack = jest.fn(x => 1 + x);

    const value = mockCallBack(1);
    expect(mockCallBack).toHaveBeenCalledWith(1);
    expect(value).toBe(2);
});

test('basic spy on a object', () => {
    const video = {
        play() {
            return true;
        }
    }

    const spy = jest.spyOn(video, 'play');
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});