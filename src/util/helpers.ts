export function generateTitle(pathname: string): void {
  let title: string;

  switch (pathname) {
    case "/": {
      title = "Početna";
      break;
    }
    case "/o-nama": {
      title = "O nama";
      break;
    }
    case "/kontakt": {
      title = "Kontakt";
      break;
    }
    case "/politika-privatnosti": {
      title = "Politika privatnosti";
      break;
    }
    case "/uslovi-koriscenja": {
      title = "Uslovi korišćenja";
      break;
    }
    case "/dostava": {
      title = "Dostava";
      break;
    }
    default: {
      title = "Invalid URL";
      break;
    }
  }

  document.title = `Privezak | ${title}`;
}
