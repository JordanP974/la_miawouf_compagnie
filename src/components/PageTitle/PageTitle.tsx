interface PageTitleProps {
  title: string;
  description?: string;
}
const SITE_NAME = 'La MiaoWouf Compagnie';

function Pagetitle({ title, description }: PageTitleProps) {
  return (
    <>
      <title>
        {`${SITE_NAME} | ${title}`}
      </title>
      {description && <meta name="description" content={description}/> }
    </>
    
  );
}

export default Pagetitle;
