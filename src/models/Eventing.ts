type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};
}
