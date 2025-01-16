/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropsInterface {
  title: string
}

class Component<T> {
  constructor (public props: T) {

  }
}

class Page extends Component<PropsInterface> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
