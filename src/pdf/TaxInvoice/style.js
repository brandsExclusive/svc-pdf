export default {
  root: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: '16px',
    padding: '20px 20px',
    pageSize: 'A4',
    margin: '50px auto',
    width: '95%'
  },
  logo: {
    display: 'block',
    margin: '0 auto',
    width: '300px',
    height: 'auto'
  },
  pageHeader: { textAlign: 'right', marginBottom: '100px' },
  banner: {
    width: '100%'
  },
  section: {
    position: 'relative',
    paddingTop: '37px',
    width: '100%',
    margin: '50px auto',
    background: '#d2d8d9'
  },
  tableContainer: { overflowY: 'auto', height: 'auto' },
  table: { borderSpacing: '0', borderCollapse: 'collapse', width: '100%' },
  td: {
    border: '1px solid black',
    background: '#fff',
    padding: '10px 25px'
  },
  th: {
    border: '1px solid black',
    borderBottom: 'none',
    background: '#fff',
    padding: '10px 25px',
    height: '0',
    lineHeight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'transparent',
    whiteSpace: 'nowrap'
  },

  hr: {
    marginTop: '20px',
    borderBottom: '2px solid black'
  },

  tdTotal: {
    border: 'none',
    background: '#fff',
    padding: '10px 25px'
  },

  tableTotal: { marginLeft: 'auto' },
  totalPriceRow: {
    borderBottom: '2px solid black'
  },

  abn: {
    clear: 'left'
  },
  'td:first-child,\nth:first-child': { border: '0' },
  'tbody tr:nth-child(even) td': { background: '#f7f7f7' },

  header: {
    position: 'absolute',
    background: 'transparent',
    color: '#000',
    padding: '9px 25px',
    top: '0',
    marginLeft: '-25px',
    lineHeight: 'normal',
    borderLeft: '1px solid #eee'
  },
  'th:first-child div': { border: 'none' },
  '.actions': { whiteSpace: 'nowrap', fontSize: '0' }
};
