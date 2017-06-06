import dispatcher from '../Dispatcher';

export function clickPicture() {
  dispatcher.dispatch({
    type: "CLICK_PICTURE",
    text,
  });
}
