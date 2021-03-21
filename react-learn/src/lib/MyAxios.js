class InterceptorsManager {
  handles = []

  use(interceptor) {
    const [handleSuc, handlError] = interceptor;
    this.handles.push(handleSuc, handlError);
  }
}

class Axios {
  constructor() {
    this.request = new InterceptorsManager();
    this.response = new InterceptorsManager();
  }

  request() {
    
  }
}