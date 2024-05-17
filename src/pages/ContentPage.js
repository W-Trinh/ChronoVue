import BottomPanel from '../components/BottomPanel';
import ContentPanel from '../components/ContentPanel';
import SidePanel from '../components/SidePanel';

let contenu = {
  'content1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec venenatis urna, vitae gravida ex. Donec nulla ligula, commodo a tempor eu, viverra sit amet turpis. Phasellus elementum eleifend nisi, iaculis finibus erat viverra quis. Pellentesque a nibh ex. Maecenas maximus purus sed urna tincidunt, ac vehicula dui ultricies. Praesent et nisi eget neque volutpat ornare. Suspendisse tincidunt eros est, eu imperdiet dolor elementum quis. Aliquam sed leo non orci ultrices dignissim. Ut eu mauris mattis tortor egestas dignissim et ut orci. Aliquam eu arcu in risus congue hendrerit. Vivamus libero ante, vulputate quis massa sed, feugiat mattis ipsum. Nullam ut semper mi.',
  'content2': 'Phasellus hendrerit nunc ipsum, mollis egestas turpis convallis in. Proin porttitor fringilla felis, quis mattis quam iaculis id. Pellentesque vel leo vel eros hendrerit efficitur in eu ante. Etiam lacinia ipsum ut lorem viverra, et feugiat dolor accumsan. Quisque ac odio id erat fringilla tristique sit amet et velit. Fusce rutrum massa posuere neque maximus rhoncus. Etiam quis risus et felis congue sodales. Phasellus viverra, orci a gravida pellentesque, mi eros finibus dui, id aliquet erat augue sed eros. Pellentesque nibh ex, sollicitudin non mattis ac, tempor ut neque. Sed at congue libero, quis hendrerit ipsum. Integer non congue tellus. Suspendisse mattis, orci sit amet mollis scelerisque, sem purus venenatis odio, vel mattis arcu purus id orci. Donec posuere pellentesque odio et varius. Proin magna lectus, ultricies vulputate urna nec, iaculis sollicitudin tellus. Vestibulum ut est nisi.',
  'content3': 'Mauris at ullamcorper nulla. Proin interdum dapibus nibh, et euismod nunc placerat id. Cras tristique sollicitudin ligula, sit amet tempor sapien gravida ac. Nullam vel rhoncus eros. Sed ac sagittis velit. In molestie sem eros, id laoreet sapien auctor id. Suspendisse porttitor luctus feugiat. Nulla fringilla quis urna id euismod. Curabitur eget gravida magna. Nunc facilisis, mauris eget pharetra molestie, ipsum nisi iaculis enim, ac dapibus lacus dolor a lectus. Duis metus neque, dignissim nec sem placerat, volutpat sollicitudin lectus. Mauris sagittis mollis diam, vitae semper mi fermentum id. Praesent vitae erat id nulla imperdiet porta sed a libero. Nulla consequat, velit ac consequat consectetur, leo nunc luctus turpis, in eleifend mauris turpis vitae ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'content4': 'Nulla a purus justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In lobortis sagittis nulla, id fermentum dolor vehicula at. Vestibulum tellus nibh, porta nec suscipit nec, porta nec sem. Nam dictum, nulla et blandit rhoncus, nisi ligula scelerisque tortor, non euismod purus metus vel ligula. Nam malesuada urna sit amet pulvinar dignissim. Morbi elementum elementum leo non suscipit. Maecenas scelerisque, orci vitae commodo ornare, est ex varius lectus, ut venenatis nunc dolor eu sem. Maecenas libero justo, aliquet a ligula at, pulvinar convallis orci. Praesent a massa sollicitudin, iaculis risus id, bibendum libero. Vivamus et ex et justo euismod dictum. Integer fermentum dui ligula, quis ornare sapien rhoncus vitae. Nullam at leo ac neque commodo hendrerit viverra non leo.',
  'content5': 'Ut dapibus turpis dignissim justo molestie, eget hendrerit sem porttitor. Nam non lacinia neque, ut condimentum ante. Proin faucibus consectetur dolor. Nam eu ipsum tincidunt ipsum ullamcorper tempor non vel nunc. Nunc quam est, rhoncus at efficitur eu, fringilla venenatis eros. Nullam consequat aliquam lectus, et tincidunt nunc sollicitudin quis. Quisque aliquam viverra leo. Etiam a aliquam sem, sit amet iaculis lectus. Praesent non ante mi. Nam condimentum tortor nulla, a ornare nibh pretium sit amet. Praesent sit amet lacinia quam. Sed tortor magna, imperdiet ac varius vel, consectetur eu tortor. Nam non placerat augue. Curabitur dui mi, lacinia et elementum ac, tincidunt vitae sem. Morbi luctus venenatis lacus id varius. Morbi ullamcorper feugiat dui id ultricies.'
};


function ContentPage() {
  return (
    <div className="relative bgImage grid grid-cols-10 grid-rows-10 h-screen p-8">
      <div className='col-span-2 row-span-8 pr-8 pl-8'>
        <SidePanel head="Événements antérieurs" content={contenu}/>
      </div>
      <div className='col-start-3 row-span-1 col-span-6 text-center font-bold text-3xl text-center pt-4'><h1 className='text-white'><a href="/">ChronoVue ça déchire</a></h1></div>
      <div class="row-start-2 col-start-3 row-span-7 col-span-6 overflow-hidden">   
        <ContentPanel/>  
      </div>
      <div className='row-start-9 col-start-1 col-span-10 row-span-2 pt-8 pr-8 pl-8'>
        <BottomPanel content={contenu}/>
      </div>
      <div className='col-start-9 col-span-2 row-span-8 pr-8 pl-8'>
        <SidePanel head="Événements ultérieurs" content={contenu}/>
      </div>
    </div>
  );
}

export default ContentPage;
