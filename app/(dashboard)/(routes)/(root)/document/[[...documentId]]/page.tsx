export interface IDocumentPageProps {
  params: {
    documentId: string;
  };
}

export default function DocumentPage({ params }: IDocumentPageProps) {
  return (
    <div>
      <h2>{params.documentId}</h2>
    </div>
  );
}
