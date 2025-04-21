import React from 'react';
import { Box, Typography, Grid, Avatar, Link } from '@mui/material';

const FeedPlus = () => {
  const dir = '/persons/'
  const users = [
    { name: 'Nicoll Puentes', photo: dir + 'nicoll.jpg' },
    { name: 'Mateo Silva', photo: dir + 'mateo.jpg' },
    { name: 'Diego Molina', photo: dir +'diego.png' },
    { name: 'Santiago Molina', photo: dir + 'santiago.jpg' },
  ];

  const webgraphy = [
    { title: 'Kadner, R.J., Rogers, K. (2025, March 7). bacteria', url: 'https://www.britannica.com/science/bacteria' },
    { title: 'BIODIVERSIDAD Y AMBIENTE DOMINIO ARCHAEA. (s.f.)', url: 'https://elbibliote.com/libro-pedia/manual_csnaturales/5grado/capitulo7/pdf/5.7.4.pdf' },
    { title: 'Brand, M. D., et al. (2003). Mitochondrial proton conductance and ROS production', url: 'Biochimica et Biophysica Acta (BBA) - Bioenergetics.' },
    { title: 'Bräsen, C., Esser, D., Rauch, B., & Siebers, B. (2014). Carbohydrate metabolism in Archaea', url: 'https://doi.org/10.1098/rstb.2006.1841' },
    { title: 'CEPERO, M., RESTREPO, S., FRANCO, A., CÁRDENAS, M., & VARGAS, N. (2012). Biología de hongos', url: 'https://www.academia.edu/44230266/Biologia_De_Hongos_Cepero_de_García_et_al_' },
    { title: 'Catalanotti, C., Yang, W., Posewitz, M. C., & Grossman, A. R. (2013). Fermentation metabolism and its evolution in algae', url: 'https://doi.org/10.3389/fpls.2013.00150' },
    { title: 'Coombs, G., & Muller, M. (1995). Biochemistry and molecular Biology of parasites', url: 'https://www.sciencedirect.com/science/article/abs/pii/B9780124733459500040' },
    { title: 'Danovaro, R., Dell\'Anno, A., Pusceddu, A., Gambi, C., Heiner, I., & Kristensen, R. M. (2010). The first metazoans living in permanently anoxic conditions', url: 'https://doi.org/10.1186/1741-7007-8-30' },
    { title: 'Deacon, J. (2006). Fungal Biology (4ª ed.)', url: 'https://yeastwonderfulworld.wordpress.com/wp-content/uploads/2016/10/fungal-biology.pdf' },
    { title: 'Larkum, A., Grossmann, A., & Raven, J. (s.f.). Photosynthesis in Algae: Biochemical and Physiological Mechanisms', url: 'https://link.springer.com/book/10.1007/978-94-007-1038-2' },
    { title: 'Lee, R. (2008). Phycology (4a ed.)', url: 'https://mariomairal.com/wp-content/uploads/2020/12/Phycology-Robert-Edward-Lee.pdf' },
    { title: 'Nabors, M. (2006). I N T R O D U C C I Ó N A L A BOTÁNICA (P. González-Barreda, Trad.)', url: 'https://plataformavirtual.iestppadah.edu.pe/biblioteca/files/original/bdd646fa4bd6b7be453e3396610b9f86.pdf' },
    { title: 'Nabors, M. (2006). I N T R O D U C C I Ó N A L A BOTÁNICA (P. González-Barreda, Trad.) Anderson, Ross P. et al. Fossilisation processes and our reading of animal antiquity', url: 'https://www.cell.com/trends/ecology-evolution/fulltext/S0169-5347(23)00137-4?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0169534723001374%3Fshowall%3Dtrue' },
    { title: 'Oren, A. (2006). The Order Halobacteriales', url: 'https://doi.org/10.1007/0-387-30743-5_8' },
    { title: 'Ruiz, J. (2008). Viaje al asombroso mundo de los hongos', url: 'FONDO DE CULTURA ECONOMICA.' },
    { title: 'Servicio Geológico Colombiano. (2018). Evolución del planeta Tierra vista a través de las plantas', url: 'https://www2.sgc.gov.co/LibroGeologiaColombia/Paginas/evolucion-a-traves-de-las-plantas.aspx' },
    { title: 'Taiz, L., y Zeiger, E. (2006). FISIOLOGIA VEGETAL (B. Blat Egea, Trad.)', url: 'https://fisiologiavegetalundec.wordpress.com/wp-content/uploads/2018/04/fv-taiz-zeiger-vol-i.pdf' },
    { title: 'Yaeger RG. Protozoa: Structure, Classification, Growth, and Development', url: 'https://www.ncbi.nlm.nih.gov/books/NBK8325/' },
    { title: '¿Qué son los protozoos? (s.f.). Instituto Europeo de Química, Física y Biología', url: 'https://ieqfb.com/protozoos-clasificacion-tradicional/' }
  ];

  const photowebgraphy = [
    { title: 'Animalia 1 usuario_© Tony Iwane', url: 'https://colombia.inaturalist.org/photos/5710720' },
  { title: 'Fungi 1 usuario_© 沈冠宇Kuan-yu Shen', url: 'https://colombia.inaturalist.org/photos/20076242' },
  { title: 'Protozoa 1 usuario_© Fredy Morales', url: 'https://colombia.inaturalist.org/photos/406369202' },
  { title: 'Chromista 1 usuario_© NOAA\'s National Ocean Service', url: 'https://colombia.inaturalist.org/photos/131300' },
  { title: 'Archaea 1 usuario_© Eric Rude', url: 'https://colombia.inaturalist.org/photos/50558440' },
  { title: 'Bacteria 1 usuario_© NIAID', url: 'https://colombia.inaturalist.org/photos/47562898?size=original' },
  { title: 'Fungi 2 usuario_© Zulma Correa Bernal', url: 'https://colombia.inaturalist.org/photos/477094368' },
  { title: 'Fotografia 8 usuario_© Sebastian Vieira-Uribe', url: 'https://colombia.inaturalist.org/photos/37548169' },
  { title: 'Plantae 2 usuario_© blprnt', url: 'https://colombia.inaturalist.org/photos/472832242' },
  { title: 'Bacteria 2 usuario_© Fredy Morales', url: 'https://colombia.inaturalist.org/photos/171429446' },
  { title: 'Animalia 2 Usuario_© Scott Walmsley', url: 'https://colombia.inaturalist.org/photos/473516138' },
  { title: 'Protozoa 2 Usuario_© Alex Kenins', url: 'https://colombia.inaturalist.org/photos/474706649' },
  { title: 'Archaea 2 16 usuario_© wojtest', url: 'https://colombia.inaturalist.org/photos/340938685' },
  { title: 'Publicación 1 De G.J. Retallack - Trabajo propio, CC BY-SA 4.0', url: 'https://commons.wikimedia.org/w/index.php?curid=48796185' },
  { title: 'Publicación 2 De Author and original uploader was MidgleyDJ at en.wikipedia - Transferido desde en.wikipedia a Commons., CC BY-SA 2.5', url: 'https://commons.wikimedia.org/w/index.php?curid=1702586' },
  { title: 'Publicación 3 De Bernard Spragg. NZ from Christchurch, New Zealand - Amanita muscaria (1), CC0', url: 'https://commons.wikimedia.org/w/index.php?curid=70122479' },
  { title: 'Publicación 4 Eric Steinert CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=81254' },
  { title: 'Plantae Publicación 1 © Walter B. Myers (http://www.arcadiastreet.com) ????', url: '' },
  { title: 'Plantae Publicación 3.1 © Matteo Chittò', url: 'https://colombia.inaturalist.org/photos/480586752' },
  { title: 'Plantae Publicación 3.2 © George Shepherd', url: 'https://colombia.inaturalist.org/photos/11145' },
  { title: 'Plantae Publicación 3.3 © Rafał Be', url: 'https://colombia.inaturalist.org/photos/450104976' },
  { title: 'Plantae Publicación 4.1 © Dominique Hämmerli', url: 'https://colombia.inaturalist.org/photos/480581496' },
  { title: 'Plantae Publicación 4.2 © 張家茗', url: 'https://colombia.inaturalist.org/photos/480614177' },
  { title: 'Plantae Publicación 4.3 © ocanire', url: 'https://colombia.inaturalist.org/photos/480584998' },
  { title: 'Plantae Publicación 5.1© Ben Costamagna', url: 'https://colombia.inaturalist.org/photos/468532292' },
  { title: 'Plantae Publicación 5.2© James Scott', url: 'https://colombia.inaturalist.org/observations/267336729' },
  { title: 'Plantae Publicación 5.3© Oksana', url: 'https://colombia.inaturalist.org/photos/467727944' },
  { title: 'Plantae Publicación 7 cloroplasto De Kelvinsong - Trabajo propio, CC0', url: 'https://commons.wikimedia.org/w/index.php?curid=23030092' },
  { title: 'Plantae Publicación 7.1 cloroplasto 2 De Kristian Peters -- Fabelfroh - Fotografía propia, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=1350193' },
  { title: 'Chromista Publicación 2.1 De Rogelio Moreno - Rogelio Moreno, CC0', url: 'https://commons.wikimedia.org/w/index.php?curid=19389802' },
  { title: 'Chromista Publicación 2.2 De Marulio - Trabajo propio, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=16980171' },
  { title: 'Chromista Publicación 2.3 De Prof. Gordon T. Taylor, Stony Brook University - corp2365, NOAA Corps Collection, Dominio público', url: 'https://commons.wikimedia.org/w/index.php?curid=246319' },
  { title: 'Chromista Publicación 3 De Anne Burgess, CC BY-SA 2.0', url: 'https://commons.wikimedia.org/w/index.php?' },
  { title: 'Animalia Publicación 1 De Verisimilus de Wikipedia en inglés, CC BY 2.5', url: 'https://commons.wikimedia.org/w/index.php?curid=3262792' },
  { title: 'Animalia Publicación 2 © Scott Walmsley', url: 'https://colombia.inaturalist.org/photos/473516138' },
  { title: 'Animalia Publicación 3 © Ron Martin', url: 'https://colombia.inaturalist.org/photos/486135339' },
  { title: 'Animalia Publicación 4 © bwood708', url: 'https://colombia.inaturalist.org/photos/27386265' },
  { title: 'Animalia Publicación 5 De Flukeman - Trabajo propio, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=3537559' },
  { title: 'Animalia Publicación 6 © Amaury Durbano', url: 'https://colombia.inaturalist.org/photos/486061424' },
  { title: 'Animalia Publicación 7 © Nathan Jackson', url: 'https://colombia.inaturalist.org/photos/486098464' },
  { title: 'Animalia Publicación 8 © tdvkc', url: 'https://colombia.inaturalist.org/photos/486140192' },
  { title: 'Protozoa Publicación 1 De Alain COUETTE - Microphotographie personnelle : http://www.arenophile.fr/Pages_IMG/P3579h.html, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=20847678' },
  { title: 'Protozoa Publicación 2 De Deuterostome - Trabajo propio, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=25530266' },
  { title: 'Archaea Publicación 2,1 © Pablo Fraire', url: 'https://colombia.inaturalist.org/photos/444738019' },
  { title: 'Archaea Publicación 2,2 © luluchouette', url: 'https://colombia.inaturalist.org/photos/313640797' },
  { title: 'Archaea Publicación 2,3 © Ryan E. Gray', url: 'https://colombia.inaturalist.org/photos/467018360' },
  { title: 'Bacteria Publicación 2,1 Dominio público', url: 'https://commons.wikimedia.org/w/index.php?curid=434143' },
  { title: 'Bacteria Publication 2.2 De Photo Credit: Content Providers(s): CDC/ Dr. Norman Jacobs - This media comes from the Centers for Disease Control and Prevention\'s Public Health Image Library (PHIL), with identification number #3693. Note: Not all PHIL images are public domain; be sure to check copyright status and credit authors and content providers. العربية | Deutsch | English | македонски | slovenščina | +/−, Dominio público', url: 'https://commons.wikimedia.org/w/index.php?curid=722089' }
  ];

  const bibliography = [
    { title: 'Brand, M. D., et al. (2003). Mitochondrial proton conductance and ROS production. Biochimica et Biophysica Acta (BBA) - Bioenergetics.' },
    { title: 'Hernandez, M. (2008). Bioquimica animal. Félix Varela. (Obra original publicada en 1990)' },
    { title: 'Shimada Miyasaka, A. (2003). Nutricion animal. Trillas.' }
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Quienes somos
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {users.map((user, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3, md: 3 }} textAlign="center">
            <Avatar
              alt={user.name}
              src={user.photo}
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="subtitle1" mt={1}>{user.name}</Typography>
          </Grid>
        ))}
      </Grid>

      <Box mt={6}>
        <Typography variant="h6" gutterBottom>
          Webgrafía
        </Typography>
        {webgraphy.map((item, idx) => (
          <Typography key={idx}>
            <Link href={item.url} target="_blank" rel="noopener">
              {item.title}
            </Link>
          </Typography>
        ))}
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Wegrafía (Fotos)
        </Typography>
        {photowebgraphy.map((item, idx) => (
          <Typography key={idx}>
            <Link href={item.url} target="_blank" rel="noopener">
              {item.title}
            </Link>
          </Typography>
        ))}
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Bibliografía
        </Typography>
        {bibliography.map((item, idx) => (
          <Typography key={idx}>{item.title}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FeedPlus;
