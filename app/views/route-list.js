import ListView from "ember-inspector/views/list";
import ListItemView from "ember-inspector/views/list-item";

export default ListView.extend({
  itemViewClass:  ListItemView.extend({
    templateName: "route_item"
  })
});
