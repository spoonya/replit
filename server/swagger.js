import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger-config.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
  sorter: "alpha",
  jsonEditor: true,
  defaultModelRendering: 'schema',
  showRequestHeaders: true
});